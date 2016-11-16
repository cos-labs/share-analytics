/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['chart'],

    dataChanged: Ember.observer('aggregations', function() {
        this.updateChart();
    }),

    data: [],

    sizeChanged: Ember.observer('resizedSignal', function() {
        this.updateChart();
    }),

    charTypeChange: Ember.observer('chartType', function(){
        this.updateChart();
    }),

    operationDict: {'donut-chart':{'title':'Published in...',
                                  'columns':function(data) {
                                      return data.map(({ key, doc_count }) => [key, doc_count]);},
                                  'c3_plot':function(title, columns, element, height, width){
                                      let donut = c3.generate({
                                          bindto: element,
                                          data: {
                                              columns,
                                              type: 'donut'
                                          },
                                          legend: { show: false },
                                          donut: {
                                              title,
                                              label: {
                                                  show: false
                                              }
                                          },
                                          size: { height: height*150-20,
                                                  width: width*150
                                                },
                                      });
                                  },
                                },
                    'bar-chart':{'title':'Top 10 Contributors',
                                 'columns':function(data) {
                                       return data.map(({ key, doc_count }) => [key, doc_count]).slice(0, 10);},
                                 'c3_plot':function(title, columns, element, height, width){
                                       let bar = c3.generate({
                                           bindto: element,
                                           data: {
                                               columns,
                                               type: 'bar',
                                               onclick: (d) => {
                                                   let url = 'https://share.osf.io/discover?q=' + d.name;
                                                   window.open(url, '_blank');
                                               }
                                           },
                                           axis: {
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
                                           },
                                           tooltip: {
                                               grouped: false, // Default true
                                           },
                                           legend: { show: false },
                                           bar: {
                                               title,
                                               label: {
                                                   show: false
                                               }
                                           },
                                           size: { height: height*150-20,
                                                   width: width*150
                                                 },
                                        });
                                   },
                                },
                    'timeseries-chart':{'title': '',
                                        'columns':function(data) {
                                              return [
                                                ['x'].concat(data.map((datum) => {return datum.key_as_string})),
                                                ['Articles'].concat(data.map((datum) => {return datum.doc_count})),
                                              ];
                                            },
                                        'c3_plot':function(title, columns, element, height, width){

                                              let ts = c3.generate({
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
                                                          title: function (d) {
                                                              return d.toString().substring(4,15); // This isn't perfect, but it's at least more verbose than before
                                                          }
                                                      }
                                                  },
                                                  point: {
                                                      show: false,
                                                  },
                                                  size: { height: height*150-20,
                                                          width: width*150
                                                        },
                                              });
                                        },
                                      },
                    },

    updateChart() {
        this.set('data', this.get(this.get('aggregation_details')));
        let title = this.operationDict[this.get('chartType')]['title'];
        let columns = this.operationDict[this.get('chartType')]['columns'](this.get('data'));
        console.log(this.aggregations);
        let element = this.$(`.chart`).get(0);
        let height = this.get('height');
        let width = this.get('width');
        this.operationDict[this.get('chartType')]['c3_plot'](title, columns, element, height, width);
    },

    didRender() {
        this.updateChart();
    },

});
