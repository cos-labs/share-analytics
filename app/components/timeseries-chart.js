/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({
    
    timeseriesList: Ember.computed('aggregations', function() { 
        let d = this.get('aggregations.articles_over_time.buckets');
        let firstRow = ['x'];
        let secondRow = ['Publicaions'];
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
                        format: '%Y-%m-%d'
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
