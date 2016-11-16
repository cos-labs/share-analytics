define('tc3/components/donut-chart', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['chart'],

        sourcesList: _ember['default'].computed('data', function () {
            return this.get('data').map(function (_ref) {
                var key = _ref.key;
                var doc_count = _ref.doc_count;
                return [key, doc_count];
            });
        }),

        dataChanged: _ember['default'].observer('aggregations', function () {
            this.updateDonut();
        }),

        data: [],

        sizeChanged: _ember['default'].observer('resizedSignal', function () {
            this.updateDonut();
        }),

        updateDonut: function updateDonut() {
            this.set('data', this.get('aggregations.sources.buckets'));
            var columns = this.get('sourcesList');
            var title = 'Published in...';
            var donut = this.get('donut');
            if (donut) {
                donut.load({
                    columns: columns,
                    unload: true
                });
                donut.resize({
                    height: this.get('height') * 150 - 20,
                    width: this.get('width') * 150
                });
            } else {
                this.initDonut(title, columns);
            }
        },

        initDonut: function initDonut(title, columns) {
            var element = this.$('.donut').get(0);
            var donut = c3.generate({
                bindto: element,
                data: {
                    columns: columns,
                    type: 'donut'
                },
                legend: { show: false },
                donut: {
                    title: title,
                    label: {
                        show: false
                    }
                },
                size: { height: this.get('height') * 150 - 20 }
            });
            this.set('donut', donut);
        },

        didRender: function didRender() {
            this.updateDonut();
        }

    });
});
/* global c3 */