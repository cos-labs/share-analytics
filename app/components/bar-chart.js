/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({
    
    contributorsList: Ember.computed('aggregations', function() {
        let data = this.get('aggregations.contributors.buckets');
        return data ? data.map(({ key, doc_count }) => [key, doc_count]) : [];
    }),

    dataChanged: Ember.observer('aggregations', function() {
        let data = this.get('contributorsList');
        this.updateBar(data);
    }),

    updateBar(data) {
        let columns = data.slice(0,10); // jscs:ignore
        let title = 'Top 10 Contributors: ';
        
        let bar = this.get('bar');
        if (!bar) {
            this.initBar(title, columns);
        } else {
            bar.load({
                columns,
                unload: true
            });   
        }
    },

    initBar(title, columns) {
        let element = this.$(`.bar`).get(0);
        let bar = c3.generate({
            bindto: element,
            data: {
                columns,
                type: 'bar'
            },
            axis: {
              x: {
                  tick: {
                      format: function() {
                          return 'Top 10 Contributors';
                      }
                  }
              },
              y: {
                   label: 'Number of Publications'
              },
            },
            tooltip: {
                grouped: false, // Default true
            },
            legend: { show: false },
            bar: {
                title,
                label: {
                    show: false
                }
            },
            size: { width: 400 }
        });
        this.set('bar', bar);
    },
    
    init() { // Init should be used ONLY for setting component proprties. When we want to work on the component DOM element, we use didInsertElement hool
        this._super(...arguments);
    },
    
    didInsertElement() {
        let data = this.get('contributorsList');
        this.updateBar(data);
    } 

    
});
