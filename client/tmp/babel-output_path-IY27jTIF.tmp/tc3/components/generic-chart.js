define('tc3/components/generic-chart', ['exports', 'ember'], function (exports, _ember) {
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    exports['default'] = _ember['default'].Component.extend({

        classNames: ['chart'],

        dataChanged: _ember['default'].observer('aggregations', function () {
            this.updateChart();
        }),

        data: [],

        sizeChanged: _ember['default'].observer('resizedSignal', function () {
            this.updateChart();
        }),

        charTypeChange: _ember['default'].observer('chartType', function () {
            this.updateChart();
        }),

        updateChart: function updateChart() {
            var _chart_options;

            var chart_type = this.get('chartType');

            var chart_options = (_chart_options = {
                bindto: this.$('.chart').get(0),
                data: {
                    columns: null, //to be filled later
                    type: chart_type
                },
                legend: { show: false }
            }, _defineProperty(_chart_options, chart_type, {
                title: null, //to be filled later
                label: {
                    show: false
                }
            }), _defineProperty(_chart_options, 'size', {
                height: this.get('height') * 150 - 20,
                width: this.get('width') * 150 }), _chart_options);

            switch (chart_type) {
                case 'donut':
                    {

                        this.set('data', this.get('aggregations.sources.buckets'));
                        var columns = this.get('data').map(function (_ref) {
                            var key = _ref.key;
                            var doc_count = _ref.doc_count;
                            return [key, doc_count];
                        });
                        var title = 'Published in...';

                        break;
                    }
                case 'bar':
                    {

                        this.set('data', this.get('aggregations.contributors.buckets'));
                        var columns = this.get('data').map(function (_ref2) {
                            var key = _ref2.key;
                            var doc_count = _ref2.doc_count;
                            return [key, doc_count];
                        }).slice(0, 10);
                        var title = 'Top 10 Contributors: ';

                        var axis = {
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
                        };
                        var tooltip = {
                            grouped: false };
                        // Default true
                        chart_options['axis'] = axis;
                        chart_options['tooltip'] = tooltip;

                        break;
                    }
                case 'timeseries':
                    {

                        this.set('data', this.get('aggregations.articles_over_time.buckets'));
                        var columns = [['x'].concat(this.get('data').map(function (datum) {
                            return datum.key_as_string;
                        })), ['Articles'].concat(this.get('data').map(function (datum) {
                            return datum.doc_count;
                        }))];
                        var title = '';
                        var data_x = 'x';
                        var axis = {
                            x: {
                                type: 'timeseries',
                                tick: {
                                    culling: {
                                        max: 10
                                    },
                                    rotate: 90,
                                    format: '%d-%m-%Y' // Format the tick labels on our chart
                                }
                            }
                        };
                        var data_types = {
                            x: 'area-spline',
                            Articles: 'area'
                        };
                        var tooltip = { // Format the tooltips on our chart
                            format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                                title: function title(d) {
                                    return d.toString().substring(4, 15); // This isn't perfect, but it's at least more verbose than before
                                }
                            }
                        };
                        var zoom = {
                            enabled: true
                        };
                        var point = {
                            show: false
                        };

                        chart_options['axis'] = axis;
                        chart_options['data']['types'] = data_types;
                        chart_options['data']['x'] = data_x;
                        chart_options['tooltip'] = tooltip;
                        chart_options['zoom'] = zoom;
                        chart_options['point'] = point;

                        break;
                    }
            }

            chart_options['data']['columns'] = columns;
            chart_options[chart_type]['title'] = title;
            c3.generate(chart_options);
        },

        didRender: function didRender() {
            this.updateChart();
        }

    });
});
/* global c3 */