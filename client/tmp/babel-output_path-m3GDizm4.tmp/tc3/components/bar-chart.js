define('tc3/components/bar-chart', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        classNames: ['chart'],

        contributorsList: _ember['default'].computed('aggregations', function () {
            var data = this.get('aggregations.contributors.buckets');
            return data ? data.map(function (_ref) {
                var key = _ref.key;
                var doc_count = _ref.doc_count;
                return [key, doc_count];
            }) : [];
        }),

        dataChanged: _ember['default'].observer('aggregations', function () {
            var data = this.get('contributorsList');
            this.updateBar(data);
        }),

        updateBar: function updateBar(data) {
            var columns = data.slice(0, 10); // jscs:ignore
            var title = 'Top 10 Contributors: ';

            var bar = this.get('bar');
            if (!bar) {
                this.initBar(title, columns);
            } else {
                bar.load({
                    columns: columns,
                    unload: true
                });
            }
        },

        initBar: function initBar(title, columns) {
            var element = this.$('.bar').get(0);
            var bar = c3.generate({
                bindto: element,
                data: {
                    columns: columns,
                    type: 'bar',
                    onclick: function onclick(d) {
                        var url = 'https://share.osf.io/discover?q=' + d.name;
                        window.open(url, '_blank');
                    }
                },
                axis: {
                    x: {
                        tick: {
                            format: function format() {
                                return 'Top 10 Contributors';
                            }
                        }
                    },
                    y: {
                        label: 'Number of Publications'
                    }
                },
                tooltip: {
                    grouped: false },
                // Default true
                legend: { show: false },
                bar: {
                    title: title,
                    label: {
                        show: false
                    }
                },
                size: { height: 300 }
            });
            this.set('bar', bar);
        },

        init: function init() {
            // Init should be used ONLY for setting component proprties. When we want to work on the component DOM element, we use didInsertElement hool
            this._super.apply(this, arguments);
        },

        didInsertElement: function didInsertElement() {
            var data = this.get('contributorsList');
            this.updateBar(data);
        },

        actions: {
            removeChart: function removeChart() {
                this.sendAction('removeChart', 'bar');
            }
        }

    });
});
/* global c3 */