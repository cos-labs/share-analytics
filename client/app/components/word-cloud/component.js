import Ember from 'ember';
//import d3.layout.cloud from '../d3.layout.cloud.js' ;

export default Ember.Component.extend({
  //from list-widget
      data : [],

      init(){
          this._super(...arguments);
          //this.processData(this.get('aggregations.listWidgetData.buckets'));

      },

      processData (data) {
          this.set('data', data.map((item) => {
              return {
                  number: item.doc_count,
                  name: item.key,
              };
          }));
      },

      actions: {

          transitionToFacet(parameter) {
              let queryParams = {};
              queryParams[this.get("item.facetDashParameter")] = parameter.name;
              this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
          }

      },

      didRender() {

        Ember.$.getScript( "d3.layout.cloud.js")
          .done(function( script, textStatus ) {
            console.log( textStatus );
          })
          .fail(function( jqxhr, settings, exception ) {
            $( "div.log" ).text( "Triggered ajaxError handler." );
          });


        d3.select($("#test").get(0)).append("span")
          .text("Hello World") ;

        //word cloud
        var fill = d3.scale.category20();

        d3.layout.cloud()
            .size([300, 300])
            .words([
              "Hello", "world", "normally", "you", "want", "more", "words",
              "than", "this"].map(function(d) {
              return {text: d, size: 10 + Math.random() * 90};
            }))
            .rotate(function() { return ~~(Math.random() * 2) * 90; })
            .font("Impact")
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
            .start();

        function draw(words) {
          d3.select($("#wordcloud").get(0)).append("svg")
              .attr("width", 300)
              .attr("height", 300)
            .append("g")
              .attr("transform", "translate(150,150)")
            .selectAll("text")
              .data(words)
            .enter().append("text")
              .style("font-size", function(d) { return d.size + "px"; })
              .style("font-family", "Impact")
              .style("fill", function(d, i) { return fill(i); })
              .attr("text-anchor", "middle")
              .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
              })
              .text(function(d) { return d.text; });
        }

    }
});

/*
var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select($("#wordcloud").get(0))
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
    */
