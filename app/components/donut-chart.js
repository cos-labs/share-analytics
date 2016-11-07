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

    sizeChanged: Ember.observer('height', 'width', function() {
        this.updateDonut();
    }),

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
        this.$()[0].style.width = this.get('width')+'px';
        this.$()[0].style.height = this.get('height')+'px';
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
            size: { height: this.get('height') }
        });
        this.set('donut', donut);
    },

    didRender() {
        this.updateDonut();
    },

});
