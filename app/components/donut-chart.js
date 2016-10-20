/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({
    
    sourcesList: Ember.computed('aggregations', function() {
        let data = this.get('aggregations.sources.buckets');
        return data ? data.map(({ key, doc_count }) => [key, doc_count]) : [];
    }),

    dataChanged: Ember.observer('aggregations', function() {
        let data = this.get('sourcesList');
        this.updateDonut(data);
    }),

    updateDonut(data) {
        let columns = data; // jscs:ignore
        let title = 'Published in...';
        
        let donut = this.get('donut');
        if (!donut) {
            this.initDonut(title, columns);
        } else {
            donut.load({
                columns,
                unload: true
            });   
        }
    },

    initDonut(title, columns) {
        let element = this.$(`.donut`).get(0);
        let donut = c3.generate({
            bindto: element,
            data: {
                columns,
                type: 'donut'
            },
            legend: { show: false },
            donut: {
                title,
                label: {
                    show: false
                }
            },
            size: { height: 300 }
        });
        this.set('donut', donut);
    },
    
    init() { // Init should be used ONLY for setting component proprties. When we want to work on the component DOM element, we use didInsertElement hool
        this._super(...arguments);
    },
    
    didInsertElement() {
        let data = this.get('sourcesList');
        this.updateDonut(data);
    },
    
    actions: {
        removeChart: function() {
            this.sendAction('removeChart','donut');
        }
    },

    
});
