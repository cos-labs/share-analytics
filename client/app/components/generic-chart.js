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
        //debugger;
    }),

    charTypeChange: Ember.observer('chartType', function(){
        this.updateChart();
    }),


    updateChart() {

        let chart_type = this.get('chartType');

        let chart_options = {
            bindto: this.element,
            data: {
                columns: null, //to be filled later
                type: chart_type,
            },
            legend: { show: false },
            [chart_type]: {
                title: this.get('charttitle'),  //to be filled later
                label: {
                    show: false
                }
            },
            //size: {
            //    height: this.get('height')*150 - 20,
            //    width: this.get('width')*150
            //},
        };

        debugger;
        if (chart_type == 'donut') {

             this.set('data', this.get('aggregations.sources.buckets'));
             var columns = this.get('data').map(({ key, doc_count }) => [key, doc_count]);
             var title = 'Published in...';

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

        } else if (chart_type == 'timeseries') {

            this.set('data', this.get('aggregations.articles_over_time.buckets'));
            var columns = [
                ['x'].concat(this.get('data').map((datum) => {return datum.key_as_string})),
                ['Articles'].concat(this.get('data').map((datum) => {return datum.doc_count})),
            ];
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
                }
            };
            let data_types = {
                x: 'area-spline',
                Articles: 'area'
            };
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
