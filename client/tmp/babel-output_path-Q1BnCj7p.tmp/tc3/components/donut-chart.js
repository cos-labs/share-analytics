define('tc3/components/donut-chart', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['chart'],

        sourcesList: _ember['default'].computed('aggregations', function () {
            var data = this.get('attrs.aggregations.value.sources.buckets');
            debugger;

            return data ? data.map(function (_ref) {
                var key = _ref.key;
                var doc_count = _ref.doc_count;
                return [key, doc_count];
            }) : [];
        }),

        dataChanged: _ember['default'].observer('aggregations', function () {
            var data = this.get('sourcesList');
            this.updateDonut(data);
        }),

        updateDonut: function updateDonut(data) {
            var columns = data; // jscs:ignore
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

        didRecieveAttrs: function didRecieveAttrs() {
            this._super.apply(this, arguments);
        },

        didInsertElement: function didInsertElement() {
            var data = this.get('sourcesList');
            this.updateDonut(data);
        },

        actions: {
            //removeChart: function() {
            //    this.sendAction('removeChart','donut');
            //}
        }

    });
});
/* global c3 */