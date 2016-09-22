/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({
    
    timeseriesList: Ember.computed('aggregations', function() { 
        let d = this.get('aggregations.articles_over_time.buckets');
        let firstRow = ['x'];
        let secondRow = ['Publications (month)'];
        d.forEach(function(entry) {
            firstRow.push(entry.key_as_string);
            secondRow.push(entry.doc_count);
        });
        return [firstRow, secondRow];
    }),

    dataChanged: Ember.observer('aggregations', function() {
        let data = this.get('timeseriesList');
        this.updateTS(data);
    }),

    updateTS(data) {
        let columns = data; 
        let title = '';
        
        let ts = this.get('ts');
        if (!ts) {
            this.initTS(title, columns);
        } else {
            ts.load({
                columns,
                unload: true
            });   
        }
    },

    initTS(title, columns) {
        let element = this.$(`.ts`).get(0);
        let ts = c3.generate({
            bindto: element,
            data: {
                x: 'x',
                columns: columns
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: function(x) {
                            return x.getFullYear();
                        }
                    }
                }
            },
             tooltip: {
                format: { // We want to return a nice-looking tooltip that is mor descriptive than our x-axis labels (since we plot monthly data)
                    title: function (d) { 
                        let m = d.toString().substring(4,8);
                        let y = d.toString().substring(11,15);
                        return '' + m + ' ' + y;
                    }
                }
            },
            size: { width: 1000, height: 600 }
        });
        this.set('ts', ts);
    },
    
    init() { // Init should be used ONLY for setting component proprties. When we want to work on the component DOM element, we use didInsertElement hool
        this._super(...arguments);
    },
    
    didInsertElement() {
        let data = this.get('timeseriesList');
        this.updateTS(data);
    } 

    
});
