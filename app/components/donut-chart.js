/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({
    
    sourcesList: Ember.computed('aggregations', function() {
        let data = this.get('aggregations.sources.buckets');
        return data ? data.map(({ key, doc_count }) => [key, doc_count]) : [];
    }),

    dataChanged: Ember.observer('aggregations', function() {
        let data = this.get('sourcesList');
        console.log(data);
        this.updateDonut(data);
    }),

    updateDonut(data) {
        let columns = data; // jscs:ignore
        console.log(columns);
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
        let element = this.$(`.donut`).get(0); // This line is breaking: for some reason, Ember isn't getting the element
        let donut = c3.generate({
            bindto: element,
            data: {
                columns,
                type: 'donut',
                onclick: (d) => {
                    let selected = this.get('selected');
                    if (!selected.contains(d.name)) {
                        this.send('changeFilter', [d.name, ...selected]);
                    }
                }
            },
            legend: { show: false },
            donut: {
                title,
                label: {
                    show: false
                }
            },
            size: { height: 400 }
        });
        this.set('donut', donut);
    },
    
    init() { // Init should be used ONLY for setting component proprties. When we want to work on the component DOM element, we use didInsertElement hool
        this._super(...arguments);
    },
    
    didInsertElement() {
        let data = this.get('sourcesList');
        this.updateDonut(data);
    } 

    
});
