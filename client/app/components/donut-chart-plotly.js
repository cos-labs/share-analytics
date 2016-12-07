/* global Plotly */
import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['chart'],

    sourcesList: Ember.computed('data', function() {
        return this.get('data').map(({ key, doc_count }) => [key, doc_count]);
    }),

    dataChanged: Ember.observer('aggregations', function() {
        this.updateDonut();
    }),

    data: [],

    sizeChanged: Ember.observer('resizedSignal', function() {
        this.updateDonut();
    }),

    updateDonut() {
        this.set('data', this.get('aggregations.sources.buckets'));
        let columns = this.get('sourcesList');
        let title = 'Published in...';
        let donut = this.get('donut');
        if (donut) {
            donut.load({
                columns,
                unload: true
            });
            donut.resize({
                height: this.get('height')*150-20,
                width: this.get('width')*150
            });
        } else {
            this.initDonut(title, columns);
        }
    },

    initDonut(title, columns) {
        let element = this.$(`.donut`).get(0);
        // let donut = c3.generate({
        //     bindto: element,
        //     data: {
        //         columns,
        //         type: 'donut'
        //     },
        //     legend: { show: false },
        //     donut: {
        //         title,
        //         label: {
        //             show: false
        //         }
        //     },
        //     size: { height: this.get('height')*150-20 }
        // });
        // this.set('donut', donut);
        let labels = this.get('sourcesList').map(function(value,index) { return value[0]; });
        let values = this.get('sourcesList').map(function(value,index) { return value[1]; });
        var data = [{
          values: values,
          labels: labels,
          hoverinfo: 'label+percent',
          hole: .6,
          type: 'pie',
          direction	: 'clockwise',
          outsidetextfont:{color:'#FFFFFF'},
        }];

        var layout = {
          annotations:[{
              font: {
                size: 12
              },
              showarrow: false,
              text: 'Published in...',
              x: 0.5,
              y: 0.5,
            }],
          showlegend: false,
        };

        this.set('chart', Plotly.newPlot(element, data, layout));
    },

    didRender() {
        this.updateDonut();
    },

});
