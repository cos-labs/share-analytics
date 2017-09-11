import Ember from 'ember';


export default Ember.Component.extend({

    data : [],
    pagebackbtn : null,
    pagenextbtn : null,

    init(){
        this._super(...arguments);
        let data = this.processData(this.get('data.hits.hits'));
        this.set('data', data);
        this.get('resourceType')
    },
    pagebackbtn: Ember.computed('page',  function() {
          let page = Number(this.parameters['page']);
          if (page == 1 || !page) {
              return 'disable';
          } else {
              return null;
          }
     }),
     pagenextbtn: Ember.computed('data',  function() {
        if(this.get('data').length < 10){
            return 'disable';
        }else{
            return null;
        }
     }),
    processData (data) {
        return data.map((datum) => {
            var options = {year: 'numeric', month: 'long', day: 'numeric' };
            options.timeZone = 'UTC';
            if (datum._source.description) {
                datum['description_truncated'] = datum._source.description.substring(0,200)+'...'
            }
            if (datum._source.date) {
                datum["_source"]["date"] = (new Date(datum["_source"]["date"])).toLocaleDateString('en-US', options);
            }
            if (datum._source.date_created) {
                datum["_source"]["date_created"] = (new Date(datum["_source"]["date_created"])).toLocaleDateString('en-US', options)
            }
            if (datum._source.date_modified) {
                datum["_source"]["date_modified"] = (new Date(datum["_source"]["date_modified"])).toLocaleDateString('en-US', options)
            }
            if (datum._source.date_published) {
                datum["_source"]["date_published"] = (new Date(datum["_source"]["date_published"])).toLocaleDateString('en-US', options)
            }
            if (datum._source.date_updated) {
                datum["_source"]["date_updated"] = (new Date(datum["_source"]["date_updated"])).toLocaleDateString('en-US', options)
            }
            if( datum["_source"]["type"] === "project"){
                datum["_source"]["type"] =  datum["_source"]["type"] + " & awards"
            }

            return datum;
        });
    },

    actions: {

        transitionToFacet(facet_name, parameter_name, parameter_value) {
            let queryParams = {};
            queryParams[parameter_name] = parameter_value;
            this.attrs.transitionToFacet(facet_name, queryParams);
        },

        pageback() {
            let page = Number(this.parameters["page"]);
            if (!page || --page < 1) { // decrements and modifies page var before the comparison
                page = 1;
            }
            this.attrs.transitionToFacet("search", {page: page})
        },
        pagenext() {
            let page = Number(this.parameters["page"]);
            if (!page) {
                page = 2;
            }
            else if ( ++page < 1) { // increments and modifies page var before the comparison
                page = 1;
            }
            this.attrs.transitionToFacet("search", {page: page})
        }

    }

});
