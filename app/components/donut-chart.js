/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['chart'],

    sourcesList: Ember.computed('data', function() {
        return this.get('data').map(({ key, doc_count }) => [key, doc_count]);
    }),

    dataChanged: Ember.observer('aggregations', function() {
        this.updateDonut();
    }),

    data: [],

    updateDonut() {
        this.set('data', this.get('aggregations.sources.buckets'))
        let columns = this.get('sourcesList')
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
    
    //init() {
    //    this._super(...arguments);
    //},
    
    didRender() {
        this.updateDonut(); 
    },
 
    actions: {
        //removeChart: function() {
        //    this.sendAction('removeChart','donut');
        //}
    },

    
});
