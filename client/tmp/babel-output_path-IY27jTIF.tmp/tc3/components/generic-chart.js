define('tc3/components/generic-chart', ['exports', 'ember'], function (exports, _ember) {
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

        operationDict: { 'donut-chart': { 'title': 'Published in...',
                'columns': function columns(data) {
                    return data.map(function (_ref) {
                        var key = _ref.key;
                        var doc_count = _ref.doc_count;
                        return [key, doc_count];
                    });
                },
                'c3_plot': function c3_plot(title, columns, element, height, width) {
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
                        size: { height: height * 150 - 20,
                            width: width * 150
                        }
                    });
                }
            },
            'bar-chart': { 'title': 'Top 10 Contributors',
                'columns': function columns(data) {
                    return data.map(function (_ref2) {
                        var key = _ref2.key;
                        var doc_count = _ref2.doc_count;
                        return [key, doc_count];
                    }).slice(0, 10);
                },
                'c3_plot': function c3_plot(title, columns, element, height, width) {
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
                        size: { height: height * 150 - 20,
                            width: width * 150
                        }
                    });
                }
            },
            'timeseries-chart': { 'title': '',
                'columns': function columns(data) {
                    return [['x'].concat(data.map(function (datum) {
                        return datum.key_as_string;
                    })), ['Articles'].concat(data.map(function (datum) {
                        return datum.doc_count;
                    }))];
                },
                'c3_plot': function c3_plot(title, columns, element, height, width) {

                    var ts = c3.generate({
                        bindto: element,
                        data: {
                            x: 'x',
                            columns: columns,
                            types: {
                                x: 'area-spline',
                                Articles: 'area'
                            }
                        },
                        axis: {
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
                        },
                        zoom: {
                            enabled: true
                        },
                        tooltip: { // Format the tooltips on our chart
                            format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                                title: function title(d) {
                                    return d.toString().substring(4, 15); // This isn't perfect, but it's at least more verbose than before
                                }
                            }
                        },
                        point: {
                            show: false
                        },
                        size: { height: height * 150 - 20,
                            width: width * 150
                        }
                    });
                }
            }
        },

        updateChart: function updateChart() {
            this.set('data', this.get(this.get('aggregation_details')));
            var title = this.operationDict[this.get('chartType')]['title'];
            var columns = this.operationDict[this.get('chartType')]['columns'](this.get('data'));
            console.log(this.aggregations);
            var element = this.$('.chart').get(0);
            var height = this.get('height');
            var width = this.get('width');
            this.operationDict[this.get('chartType')]['c3_plot'](title, columns, element, height, width);
        },

        didRender: function didRender() {
            this.updateChart();
        }

    });
});
/* global c3 */