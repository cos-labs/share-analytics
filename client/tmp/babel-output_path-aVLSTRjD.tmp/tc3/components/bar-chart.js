define('tc3/components/bar-chart', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        classNames: ['chart'],

        sourcesList: _ember['default'].computed('data', function () {
            return this.get('data').map(function (_ref) {
                var key = _ref.key;
                var doc_count = _ref.doc_count;
                return [key, doc_count];
            }).slice(0, 10);
        }),

        dataChanged: _ember['default'].observer('aggregations', function () {
            this.updateBar();
        }),

        sizeChanged: _ember['default'].observer('resizedSignal', function () {
            this.updateBar();
        }),

        updateBar: function updateBar() {
            this.set('data', this.get('aggregations.contributors.buckets'));
            var columns = this.get('sourcesList'); // jscs:ignore
            var title = 'Top 10 Contributors: ';
            var bar = this.get('bar');
            if (bar) {
                bar.load({
                    columns: columns,
                    unload: true
                });
                bar.resize({
                    height: this.get('height') * 150 - 20,
                    width: this.get('width') * 150
                });
            } else {
                this.initBar(title, columns);
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
                size: { height: this.get('height') * 150 - 20 }
            });
            this.set('bar', bar);
        },

        didRender: function didRender() {
            this.updateBar();
        }

    });
});
/* global c3 */