/* global c3 */
import Ember from 'ember';
import ENV from 'analytics-dashboard/config/environment';
import currencyRounder from '../../utils/currency-rounder';


const NIH_LABELS = {
  'fogarty international center': 'FIC',
  'national center for advancing translational sciences': 'NCATS',
  'national center for complementary and integrative health': 'NCCIH',
  'national cancer institute': 'NCI',
  'national eye institute': 'NEI',
  'national human genome research institute': 'NHGRI',
  'national heart': 'NHLBI',
  'national institute on aging': 'NIA',
  'national institute on alcohol abuse and alcoholism': 'NIAAA',
  'national institute of allergy and infectious diseases': 'NIAID',
  'national institute of arthritis and musculoskeletal and skin diseases': 'NIAMS',
  'national institute of biomedical imaging and bioengineering': 'NIBIB',
  'national institute of child health and human development': 'NICHD',
  'national institute on drug abuse': 'NIDA',
  'national institute on deafness and other communication disorders': 'NIDCD',
  'national institute of dental and craniofacial research': 'NIDCR',
  'national institute of diabetes and digestive and kidney diseases': 'NIDDK',
  'national institute of environmental health sciences': 'NIEHS',
  'national institute of general medical sciences': 'NIGMS',
  'national institute of mental health': 'NIMH',
  'national institute of neurological disorders and stroke': 'NINDS',
  'national institute of nursing research': 'NINR',
  'national library of medicine': 'NLM',
  'office of the director': 'OD',
  'national science foundation': 'NSF',
  'u.s. department of energy': 'U.S. DOE',
  'rolling deck to repository (r2r) program': 'R2R Program',
  'pangaea - data publisher for earth & environmental science': 'PANGAEA',
  'escholarship, university of california': 'eScholarship, UC',
  'international studies perspectives 2015. doi: 10.1111/insp.12104': 'Intl. Studies Perspectives'
};

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

function getLabel(label) {
    if (NIH_LABELS[label.toLowerCase()]) {
        return NIH_LABELS[label.toLowerCase()];
    }
    return label;
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
        if (this.get('name') === "Funders") {
            this.processData(this.get('aggregations.funders.buckets'));
        }
    },


    processData: async function(data) {
        if (this.get('name') === 'Data Providers' || this.get('name') === 'Funders') {
            let agent_details = await Ember.$.ajax({
                url: 'https://dev-labs.cos.io/bulk_get_agents',
                crossDomain: true,
                data: JSON.stringify(data),
                type: 'POST',
                contentType: 'application/json'
            });
            this.set("data", JSON.parse(agent_details));
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
                var data = [{
                   'id': '64201-BDE-4D4',
                   'name': 'UC San Diego',
                   'number': 58
                }];
                this.set('data', data);
            }

            if (this.get('item.mappingType') === 'OBJECT_TO_ARRAY') {
                var columns = this.get('data').map(({ id, number }) => [id, number]);
            }

            if (this.get('item.mappingType') === 'OBJECT_AWARDS_NESTED_VALUE_TO_ARRAY') {
                var columns = this.get('data').map(({ id, number, awards }) => [id, awards.value]);
            }

            chart_options['tooltip'] = {
                format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                    name: function (id, percentage) {
                        return self.data.reduce(function(acc, cur, idx, arr) {
                            if (cur.id === id) {
                                return cur.name;
                            }
                            return acc;
                        }, false);
                    },
                    value: function (value, percent, id) {
                        var obj = self.data.filter(function (obj) {
                          return obj.id === id;
                          })[0];
                        var counts = obj.number;
                        if (self.get('name') === 'Funders') {
                            let roundedValue = currencyRounder(value);
                            return counts + "&nbsp;records ($" + roundedValue + ")";

                        }
                        return counts + " records"; // This isn't perfect, but it's at least more verbose than before
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
                if (angle_size < 0.5) {
                    return;
                }
                d3.select(this.parentNode).append('text')
                    .text(self.data.reduce(function(acc, cur, idx, arr) {
                        if (cur.id === d.data.id) {
                            var string = cur.name ? cur.name : cur.id;
                            var label = getLabel(string);
                            if (label.length > 28) {
                                return label.substring(0,25) + "...";
                            }
                            return label;
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
        parentTransitionToFacet(facetDash, queryParams){
            this.attrs.transitionToFacet(facetDash, queryParams);
        },
        transitionToFacet(id, override) { //Two different items here; one refers to the widget; one refers to the datum.
            override = override || false;
            let queryParams = {};
            let data = this.get('data');
            let item = data.reduce((acc, cur, idx, arr) => {
                if (cur.id === id) {
                    return cur;
                }
                return acc;
            }, false);
            var facet = this.get("item.facetDashParameter");
            var facetDash = this.get("item.facetDash");
            queryParams["page"] = undefined;
            if(override){
                facetDash = override;
            }
            if (id === null) {
                this.attrs.transitionToFacet(facetDash, queryParams);
                return;
            }
            if (facetDash === "url" && item.url) {
                window.location.href = item.url;
                return;
            }
            if (facet) {
                queryParams[facet] = item.name;
                if (item.types.indexOf("agent") > -1) {
                    queryParams[facet] = item.id;
                }
                this.attrs.transitionToFacet(facetDash, queryParams);
            }
        },
    }

});
