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

        updateDonut: function updateDonut() {
            this.set('data', this.get('aggregations.sources.buckets'));
            var columns = this.get('sourcesList');
            var title = 'Published in...';

            var donut = this.get('donut');
            if (!donut) {
                this.initDonut(title, columns);
            } else {
                donut.load({
                    columns: columns,
                    unload: true
                });
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
                size: { height: 300 }
            });
            this.set('donut', donut);
        },

        //init() {
        //    this._super(...arguments);
        //},

        didRender: function didRender() {
            this.updateDonut();
        },

        actions: {
            //removeChart: function() {
            //    this.sendAction('removeChart','donut');
            //}
        }

    });
});
/* global c3 */