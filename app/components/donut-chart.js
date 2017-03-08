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

    sizeChanged: Ember.observer('resizedSignal', function() {
        this.updateDonut();
    }),

    updateDonut() {
        this.set('data', this.get('aggregations.sources.buckets'));
        let columns = this.get('sourcesList');
        let title = 'Published in...';
        let donut = this.get('donut');
        if (donut) {
            donut.load({
                columns,
                unload: true
            });
            donut.resize({
                height: this.get('height')*150-20,
                width: this.get('width')*150
            });
        } else {
            this.initDonut(title, columns);
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
            size: { height: this.get('height')*150-20 }
        });
        this.set('donut', donut);
    },

    didRender() {
        this.updateDonut();
    },

});
