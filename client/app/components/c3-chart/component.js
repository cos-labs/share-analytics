/* global c3 */
import Ember from 'ember';
import ENV from 'analytics-dashboard/config/environment';

const NIH_HARDCODE = [
    {key: 'FIC', doc_count: 685870},
    {key: 'NCATS', doc_count: 11798267},
    {key:'NCCIH', doc_count: 527109},
    {key:'NCI', doc_count: 37421432},
    {key:'NEI', doc_count: 9258786},
    {key:'NHGRI', doc_count: 5050824},
    {key:'NHLBI', doc_count: 37973512},
    {key:'NIA', doc_count: 30039371},
    {key:'NIAAA', doc_count: 6709896},
    {key:'NIAID', doc_count: 44746441},
    {key:'NIAMS', doc_count: 6571101},
    {key:'NIBIB', doc_count: 4005180},
    {key:'NICHD', doc_count: 13278402},
    {key:'NIDA', doc_count: 29823005},
    {key:'NIDCD', doc_count: 4439991},
    {key:'NIDCR', doc_count: 1155900},
    {key:'NIDDK', doc_count: 32526462},
    {key:'NIEHS', doc_count: 4674188},
    {key:'NIGMS', doc_count: 53652460},
    {key:'NIMH', doc_count: 38119017},
    {key:'NINDS', doc_count: 20635337},
    {key:'NINR', doc_count: 1976020},
    {key:'NLM', doc_count: 1069055},
    {key:'OD', doc_count: 4275564}
];

export default Ember.Component.extend({

    classNames: ['chart'],
    charttitle: 'Untitled Chart',

    dataChanged: Ember.observer('data', function() {
        this.updateChart();
    }),

    dataChanged2: Ember.observer('data.[]', function() {
        this.updateChart();
    }),

    data: [],

    init() {
        this._super(...arguments);
        if (this.get('name') === 'Data Providers') {
            this.processData(this.get("aggregations.publishers.buckets"))
        }
        if (this.get('name') === "Awards") {
            this.processData(NIH_HARDCODE);
        }
    },

    processData: async function(data) {
        if (this.get('name') === 'Data Providers') {
            this.set("data",
                await Ember.RSVP.Promise.all(
                    data.map(async function(datum, index, array) {
                        let agent_info = await Ember.$.ajax({
                            url: ENV.apiUrl + '/search/agents/' + datum.key,
                            crossDomain: true,
                            type: 'GET',
                            contentType: 'application/json',
                        });
                        data[index]._source = agent_info._source;
                        data[index].doc_count = data[index].doc_count;
                        data[index].key = data[index].key;
                        return data[index];
                    })
                )
            );
        }
        if (this.get('name') === "Awards") {
            this.set("data", await data);
        }
        
    },

    sizeChanged: Ember.observer('resizedSignal', function() {
        if (this.get('resizedSignal') === false) { return; }
        this.updateChart();
        this.set('resizedSignal', false);
    }),

    charTypeChange: Ember.observer('chartType', function(){
        this.updateChart();
    }),

    updateChart: async function() {

        var self = this;
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
            bindto: this.$(this.element).find('.renderChart')[0],
            data: {
                columns: null, //to be filled later
                type: chart_type,
                onclick: (d) => {
                    self.get('actions').transitionToFacet.call(self, d.id);
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
            var title = '';

            var _data = this.get('data');

            if (this.get('item.mappingType') === 'OBJECT_TO_ARRAY') {
                var columns = this.get('data').map(({ key, doc_count }) => [key, doc_count]);
            }

        } else if (chart_type === 'bar') {

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

        } else if (chart_type === 'relevanceHistogram') {


            let UC_hits = this.get('aggregations.filtered_score.buckets.institution.doc_count')
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
                    let val = this.get('aggregations.filtered_score.buckets.institution.score.buckets')[datum.key];
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

        } else if (chart_type === 'timeseries') {


            let x_axis = this.get('data.aggregations.all_over_time.buckets').map((datum) => { return datum.key_as_string; });
            var columns = this.get('data.aggregations.sorted_by_type.buckets').map((bucket) => {
                return [bucket.key].concat(bucket['type_over_time'].buckets.reduce((ret, bucket) => {
                    ret[x_axis.indexOf(bucket.key_as_string)] = linearToLog10(bucket.doc_count);
                    return ret;
                }, (new Array(x_axis.length)).fill(0)));
            });
            columns.unshift(['x'].concat(x_axis));
            columns.unshift(['All Events'].concat(this.get('data.aggregations.all_over_time.buckets').map((bucket) => {
                return linearToLog10(bucket.doc_count);
            })));
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

            let point = {
                show: false,
            };

            chart_options['data']['types'] = data_types;
            chart_options['data']['x'] = data_x;
            chart_options['legend'] = { position: "right" };
            chart_options['point'] = point;

        }

        chart_options['data']['columns'] = columns;
        chart_options[chart_type]['title'] = title;
        this.set('chart', c3.generate(chart_options));

    },

    didRender() {
        //this.updateChart();
    },
    actions: {
        transitionToFacet(id) { //Two different items here; one refers to the widget; one refers to the datum.
            let queryParams = {};
            let data = this.get('data');
            let item = data.reduce((acc, cur, idx, arr) => {
                if (cur.id = id) {
                    return cur;
                }
                return acc;
            }, false);
            var facet = this.get("item.facetDashParameter");
            let facetDash = this.get("item.facetDash");
            if (facetDash === "url" && item.url) {
                window.location.href = item.url;
                return;
            }
            if (facet) {
                queryParams[facet] = item.name;
                if (facetDash === "objectDetail" || facetDash === "agentDetail") {
                    queryParams[facet] = item.id;
                }
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        },
    }

});
