/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['chart'],

    sourcesList: Ember.computed('data', function() {
        return this.get('data').map(({ key, doc_count }) => [key, doc_count]).slice(0, 10);
    }),

    dataChanged: Ember.observer('aggregations', function() {
        this.updateBar();
    }),

    sizeChanged: Ember.observer('resizedSignal', function() {
        this.updateBar();
    }),
    
    // Observe the width of the outer div (placeholder) surrounding the chart when browser size changes
    parentWidthChanged: Ember.observer('parentWidth',function() {
        if(this.get('parentWidth') < this.get('width')*150) { // If the outer div is narrower than the chart width
            let w = this.get('parentWidth')/150; // Scale the outer div's size in units of 150 (to be consistent with our previous chart sizing)
            this.set('width',w); // Set the "width" of the chart to this scaled unit
            this.updateBar(); // Re-draw the chart at a smaller width
        }
    }),

    updateBar() {
        this.set('data', this.get('aggregations.contributors.buckets'));
        let columns = this.get('sourcesList'); // jscs:ignore
        let title = 'Top 10 Contributors: ';
        let bar = this.get('bar');
        if (bar) {
            bar.load({
                columns,
                unload: true
            });
            bar.resize({
                height: this.get('height')*150-20,
                width: this.get('width')*150
            });
        } else {
            this.initBar(title, columns);
        }
    },

    initBar(title, columns) {
        let element = this.$(`.bar`).get(0);
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
            size: { height: this.get('height')*150-20 }
        });
        this.set('bar', bar);
    },

    didRender() {
        this.updateBar();
    },

});
