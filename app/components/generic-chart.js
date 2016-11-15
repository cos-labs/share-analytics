/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['chart'],

    sourcesList: Ember.computed('data', function() {
      if(this.get('chartType')=='donut-chart'){
          return this.get('data').map(({ key, doc_count }) => [key, doc_count]);
      }
      else if(this.get('chartType')=='bar-chart'){
          return this.get('data').map(({ key, doc_count }) => [key, doc_count]).slice(0, 10);
      }
    }),

    // Define boolean variables that specify which subsets (if any) of abstractcreativeworks we're specifically looking at
    tPub: false, // Publication
    tPre: false, // Preprint
    tCre: false, // Creativework
    tPro: false, // Project

    timeseriesList: Ember.computed('data', function() { // Format our timeseries data
        if(this.get('chartType')=='timeseries-chart'){
            let data = this.get('data');
            return [
                ['x'].concat(data.map((datum) => {return datum.key_as_string})),
                ['Articles'].concat(data.map((datum) => {return datum.doc_count})),
            ];
        }
    }),

    pushTS(xCol) { // Add a specific subset of abstractcreativeworks to the TS chart
        let ts = this.get('ts');
        ts.load({
            columns: [xCol]
        });
    },

    popTS(xCol) { // Remove a specific subset of abstractcreativeworks from the TS chart
        let ts = this.get('ts');
        ts.unload([xCol]);
    },

    // If the user wants to isolate preprints:
    tPreChanged: Ember.observer('tPre', function() {
        let otherSubsets = (this.get('tPub') || this.get('tCre') || this.get('tPro')); // check if we already are displaying article subsets on the chart
        if(this.get('tPre')) { // if the user checked the box
            this.filterTS('preprint',otherSubsets);
        }
        else { // if the user unchecked the box
            if(!otherSubsets) { // if this is the only data on the chart right now and we're removing it
                let data = this.get('timeseriesList'); // reload the original chart
                this.updateChart(data);
            }
            else {
                this.popTS('preprint');
            }
        }
    }),

    // If the user wants to isolate publications:
    tPubChanged: Ember.observer('tPub', function() {
        let otherSubsets = (this.get('tPre') || this.get('tCre') || this.get('tPro'));
        if(this.get('tPub')) { // if the user checked the box
            this.filterTS('publication',otherSubsets);
        }
        else { // if the user unchecked the box
            if(!otherSubsets) {
                let data = this.get('timeseriesList');
                this.updateChart(data);
            }
            else {
                this.popTS('publication');
            }
        }
    }),

    // If the user wants to isolate creativeworks:
    tCreChanged: Ember.observer('tCre', function() {
        let otherSubsets = (this.get('tPre') || this.get('tPub') || this.get('tPro'));
        if(this.get('tCre')) { // if the user checked the box
            this.filterTS('creativework',otherSubsets);
        }
        else { // if the user unchecked the box
            if(!otherSubsets) {
                let data = this.get('timeseriesList');
                this.updateChart(data);
            }
            else {
                this.popTS('creativework');
            }
        }
    }),

    // If the user wants to isolate projects:
    tProChanged: Ember.observer('tPro', function() {
        let otherSubsets = (this.get('tPre') || this.get('tPub') || this.get('tCre'));
        if(this.get('tPro')) { // if the user checked the box
            this.filterTS('project',otherSubsets);
        }
        else { // if the user unchecked the box
            if(!otherSubsets) {
                let data = this.get('timeseriesList');
                this.updateChart(data);
            }
            else {
                this.popTS('project');
            }
        }
    }),

    // Isolate specific subsets of abstractcreativeworks
    filterTS(typeString,o) {
        let d = this.get('aggregations.articles_over_time.buckets');
        let firstRow = ['x'];
        let secondRow = [typeString];
        d.forEach(function(entry) {
            firstRow.push(entry.key_as_string);
            let hasPubBucket = false;
            entry.arttype.buckets.forEach(function(b) {
               if(b.key === typeString) {
                   hasPubBucket = true;
                   secondRow.push(b.doc_count);
               }
            });
            if(!hasPubBucket) {
               secondRow.push(0);
            }
        });
        if(o) {
            this.pushTS(secondRow);
        }
        else {
            let data = [firstRow, secondRow];
            this.updateChart(data);
        }
    },

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

    updateChart() {
        switch(this.get('chartType')) {
            case 'donut-chart':{
                this.set('data', this.get('aggregations.sources.buckets'));
                let columns = this.get('sourcesList');
                let title = 'Published in...';
                this.$(`#timeseriesCheckbox`).hide();
                this.drawDonut(title, columns);
                break;}
            case 'bar-chart':{
                this.set('data', this.get('aggregations.contributors.buckets'));
                let columns = this.get('sourcesList'); // jscs:ignore
                let title = 'Top 10 Contributors: ';
                this.$(`#timeseriesCheckbox`).hide();
                this.drawBar(title, columns);
                break;}
            case 'timeseries-chart':{
                this.set('data', this.get('aggregations.articles_over_time.buckets'));
                let columns = this.get('timeseriesList');
                let title = '';
                let interval = this.get('interval');
                this.$(`#timeseriesCheckbox`).show();
                this.drawTS(title, columns, interval);
                break;}
        }
    },

    drawDonut(title, columns){
        let element = this.$(`.chart`).get(0);
        console.log(element);
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
            size: { height: this.get('height')*150-20,
                    width: this.get('width')*150
                  }
        });
    },

    drawBar(title, columns){
        let element = this.$(`.chart`).get(0);
        console.log(element);
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
            size: { height: this.get('height')*150-20,
                    width: this.get('width')*150
                  }
        });
    },

    drawTS(title, columns, interval){
        let element = this.$(`.chart`).get(0);
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
            size: { height: this.get('height')*150-20,
                    width: this.get('width')*150
                  }
        });

        this.set('ts', ts);
    },

    didRender() {
        this.updateChart();
    },

});
