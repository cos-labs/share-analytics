/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['chart'],
    charttitle: 'Untitled Chart',

    dataChanged: Ember.observer('aggregations', function() {
        this.updateChart();
    }),

    data: [],

    sizeChanged: Ember.observer('resizedSignal', function() {
        if (this.get('resizedSignal') == false) return;
        this.updateChart();
        this.set('resizedSignal', false);
    }),

    download: Ember.observer( 'downloadHook', function() {
      let element = this.element;
      var a = document.createElement('a'), xml, ev;
      a.download = 'chart.svg'; // file name
      xml = (new XMLSerializer()).serializeToString(element);
      a.href = 'data:application/octet-stream;base64,' + btoa(xml);
      ev = document.createEvent("MouseEvents");
      ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(ev);
      console.log('josh') ;
      this.get('downloadHook') ;
    }),

    charTypeChange: Ember.observer('chartType', function(){
        this.updateChart();
    }),

    updateChart() {

        function log10ToLinear(log_num) {
            if (log_num <= 0) {
                return 0;
            }
            return Math.pow(10, log_num-1).toFixed(0);
        }

        function linearToLog10(lin_num) {
            if (lin_num <= 0) {
                return 0;
            }
            return (Math.log(lin_num) / Math.LN10) + 1;
        }

        let chart_type = this.get('chartType');

        let chart_options = {
            bindto: this.element,
            data: {
                columns: null, //to be filled later
                type: chart_type,
                onclick: (d) => {
                    let queryParams = {
                        'id': d.id
                    };
                    this.attrs.transitionToFacet('topic', queryParams);
                },
            },
            legend: { show: false },
            [chart_type]: {
                title: this.get('charttitle'),  //to be filled later
                label: {
                    show: false
                }
            },
        };

        if (chart_type == 'donut') {
            if (this.get('name') === 'Publishers') {
              this.set('data', this.get('aggregations.publishers.buckets'));
              var columns = this.get('data').map(({ key, doc_count }) => [key, doc_count]);
              var title = 'Publishers';
            } else {
                this.set('data', this.get('aggregations.sources.buckets'));
                var columns = [['FIC', 685870], ['NCATS', 11798267], ['NCCIH', 527109], ['NCI', 37421432], ['NEI', 9258786], ['NHGRI', 5050824], ['NHLBI', 37973512], ['NIA', 30039371], ['NIAAA', 6709896], ['NIAID', 44746441], ['NIAMS', 6571101], ['NIBIB', 4005180], ['NICHD', 13278402], ['NIDA', 29823005], ['NIDCD', 4439991], ['NIDCR', 1155900], ['NIDDK', 32526462], ['NIEHS', 4674188], ['NIGMS', 53652460], ['NIMH', 38119017], ['NINDS', 20635337], ['NINR', 1976020], ['NLM', 1069055], ['OD', 4275564]];
                var title = '';
            }

        } else if (chart_type == 'bar') {

            this.set('data', this.get('aggregations.contributors.buckets'));
            var columns = this.get('data').map(({ key, doc_count }) => [key, doc_count]).slice(0, 10);

            chart_options['axis'] = {
                x: {
                    tick: {
                        format: function() {
                            return 'Top 10 Contributors';
                        }
                    }
                },
                y: {
                     label: 'Number of Publications'
                },
            };
            chart_options['tooltip'] = {
                grouped: false, // Default true
            };
            chart_options['tooltip'] = tooltip;

        } else if (chart_type == 'relevanceHistogram') {

            let UC_hits = this.get('aggregations.filtered_score.buckets.UC.doc_count')
            let total_hits = this.get('total')
            console.log(UC_hits)
            console.log(total_hits)
            var columns = [
                ['overallCountByRelevance'].concat(this.get('data.aggregations.all_score.buckets').map((datum) => {
                    let val = this.get('aggregations.all_score.buckets')[datum.key];
                    if (val && val.doc_count > 0) { return val.doc_count * UC_hits / total_hits; }
                    return 0;
                })),
                ['ucCountByRelevance'].concat(this.get('aggregations.all_score.buckets').map((datum) => {
                    let val = this.get('aggregations.filtered_score.buckets.UC.score.buckets')[datum.key];
                    if (val && val.doc_count > 0) { return val.doc_count; }
                    return 0;
                })),
            ];

            chart_options['axis'] = {
                x: {
                    tick: {
                        format: function(val) {
                            return val;
                        }
                    },
                    label: 'Relevance Score'
                },
                y: {
                    tick: {
                        format: function (d) { return d; }
                    },
                    label: 'Number of Items'
                }
            };

            let zoom = {enabled: true};
            chart_options['data']['types'] = {
                x: 'bar',
                overallCountByRelevance: 'bar',
                doeCountByRelevance: 'bar',
                ucCountByRelevance: 'bar'
            };

            chart_options['data']['labels'] = {
                //labels: {
                //    format: {
                //        overallCountByRelevance: function(d,id){console.log(id, Math.pow(10,d));return Math.pow(10,d).toFixed(0);},
                //        institutionCountByRelevance: function(d,id){console.log(id, Math.pow(10,d));return Math.pow(10,d).toFixed(0);}
                //    }
                //}
            };

            chart_options['point'] = {show: false};
            chart_options['zoom'] = {enabled: true};

        } else if (chart_type == 'timeseries') {


            let x_axis = this.get('data.aggregations.all_over_time.buckets').map((datum) => { return datum.key_as_string })
            var columns = this.get('data.aggregations.sorted_by_type.buckets').map((bucket) => {
                return [bucket.key].concat(bucket['type_over_time'].buckets.reduce((ret, bucket) => {
                    ret[x_axis.indexOf(bucket.key_as_string)] = linearToLog10(bucket.doc_count);
                    return ret;
                }, (new Array(x_axis.length)).fill(0)));
            });
            columns.unshift(['x'].concat(x_axis))
            columns.unshift(['All Events'].concat(this.get('data.aggregations.all_over_time.buckets').map((bucket) => {
                return linearToLog10(bucket.doc_count);
            })))
            console.log(columns);
            let data_x = 'x';
            chart_options['axis'] = {
                x: {
                    type: 'timeseries',
                    tick: {
                        culling: {
                            max: 10
                        },
                        rotate: 90,
                        format: '%d-%m-%Y' // Format the tick labels on our chart
                    }
                },
                y: {
                    min: 1,
                    tick: {
                        format: log10ToLinear
                    },
                    label: 'Number of Items (Log Scale)'
                }
            };
            let data_types = columns.reduce((r, c, i, a) => {
                r[c[0]] = 'area-spline';
                return r;
            }, {});
            chart_options['tooltip'] = {
                format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                    title: function (d) {
                        return d.toString().substring(4,15); // This isn't perfect, but it's at least more verbose than before
                    }
                }
            };
            let zoom = {
                enabled: true
            };
            let point = {
                show: false,
            };

            chart_options['data']['types'] = data_types;
            chart_options['data']['x'] = data_x;
            chart_options['legend'] = { position: "right" };
            chart_options['zoom'] = zoom;
            chart_options['point'] = point;

        }

        chart_options['data']['columns'] = columns;
        chart_options[chart_type]['title'] = title;
        this.set('chart', c3.generate(chart_options));

    },

    didRender() {
        this.updateChart();
    },

});
