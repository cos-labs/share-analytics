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
        if (this.get('name') === "Funding") {
            this.processData(this.get('aggregations.funders.buckets'));
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
        if (this.get('name') === "Funding") {
            data =  data.map(function(datum) {
                datum._source = {
                    id: datum.key
                }
                return datum;
            });
            this.set('data', await data);
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

            if (this.get('data').length === 0 && this.get('name') === 'Data Providers') {
                var key = 'UC San Diego Library';
                var data = [{
                   'key': key,
                   'doc_count': 55,
                   '_source': {
                      'id': key,
                      'name': key
                   }
                }];
                this.set('data', data);
            }

            if (this.get('item.mappingType') === 'OBJECT_TO_ARRAY') {
                var columns = this.get('data').map(({ key, doc_count }) => [key, doc_count]);
            }

            if (this.get('item.mappingType') === 'OBJECT_AWARDS_NESTED_VALUE_TO_ARRAY') {
                var columns = this.get('data').map(({ key, doc_count, awards }) => [key, awards.value]);
            }

            chart_options['tooltip'] = {
                format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                    name: function (id, percentage) {
                        return self.data.reduce(function(acc, cur, idx, arr) {
                            if (cur._source.id === id) {
                                return cur._source.name;
                            }
                            return acc;
                        }, false);
                    },
                    value: function (value, percent, id) {
                        return Math.floor(percent*100) + "% (" + value + " records)"; // This isn't perfect, but it's at least more verbose than before
                    }
                }
            };

            chart_options['donut'].width = 100;

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

        if (chart_type === "donut") {
            var labels = d3.selectAll(this.$(this.element).find('.c3-chart-arc')).select(function(d) {
                let angle_size = d.endAngle - d.startAngle;
                console.log(angle_size);
                if (angle_size < 0.5) {
                    return;
                }
                d3.select(this.parentNode).append('text')
                    .text(self.data.reduce(function(acc, cur, idx, arr) {
                        var string;
                        if (cur._source.id === d.data.id) {
                            if (cur._source.name) {
                                string = cur._source.name
                            } else {
                                string = cur._source.id;
                            }
                            if (string.length > 38) {
                                return string.substring(0,25) + "...";
                            }
                            return string;
                        }
                        return acc;
                    }, false))
                    .attr("x", 160*Math.sin((d.startAngle + d.endAngle)/2))
                    .attr("y", -130*Math.cos((d.startAngle + d.endAngle)/2))
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "central")
                    .attr("font-size", "12px")
                    .attr("fill", "rgb(250,250,250)")
                    .each(function(d) {
                        var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
                        this.parentNode.insertBefore(rect, this);
                        let bbox = this.getBBox();
                        d3.select(rect)
                            .attr("fill", "rgba(0,0,0,0.5)")
                            .attr("stroke", "rgba(0,0,0,0.6)")
                            .attr("width", bbox.width + 14)
                            .attr("height", bbox.height + 8)
                            .attr("x", bbox.x - 7)
                            .attr("y", bbox.y - 4)
                    })
            });
            /*var labels_bgs = d3.selectAll(this.$(this.element).find('.c3-chart-arc'))
                .insert('rect', 'text')
                .each(function(d) {
                debugger;
                    d.attr("width", 200).attr("height", 20)
                })

            labels.select(function() {
            });*/
        }

    },

    didRender() {
        //this.updateChart();
    },

    actions: {

        transitionToFacet(id, override) { //Two different items here; one refers to the widget; one refers to the datum.
            override = override || false;
            let queryParams = {};
            let data = this.get('data');
            let item = data.reduce((acc, cur, idx, arr) => {
                if (cur.id = id) {
                    return cur;
                }
                return acc;
            }, false);
            var facet = this.get("item.facetDashParameter");
            var facetDash = this.get("item.facetDash");
            if(override){
                facetDash = override;
            }
            if (facetDash === "url" && item.url) {
                window.location.href = item.url;
                return;
            }
            if (facet) {
                queryParams[facet] = item.name;
                if (facetDash === "objectDetail" || facetDash === "agentDetail") {
                    queryParams[facet] = item.id;
                }
                this.attrs.transitionToFacet(facetDash, queryParams);
            }
        },
    }

});
