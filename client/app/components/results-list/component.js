import Ember from 'ember';

const ucsd_lucene_query = 'contributors:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20publishers:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20funders:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20title:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20hosts:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20%20tags:ucsd%20OR%20tags:"scripps%20institution%20of%20oceanography"';

export default Ember.Component.extend({

    data : [],

    init(){
        this._super(...arguments);
        let data = this.processData(this.get('data.hits.hits'));
        this.set('data', data);
    },

    processData (data) {
        return data.map((datum) => {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            options.timeZone = 'UTC';
            options.timeZoneName = 'short'
            if (datum._source.description) {
                datum["description_truncated"] = datum._source.description.substring(0,200)+"..."
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
            return datum;
        });
    },

    transitionToURL: function(base_url, parameters) {
        parameters["q"] = ucsd_lucene_query;
        let url = "https://share.osf.io/discover?" + Object.keys(parameters).map((key, index) => {
            return key + "=" + parameters[key];
        }).join('&');
        window.location.href = url;
    },

    actions: {

        transitionToFacet(facet_name, parameter_name, parameter_value) {
            let queryParams = {};
            queryParams[parameter_name] = parameter_value;
            this.attrs.transitionToFacet(facet_name, queryParams);
        },

        transitionToSHARETag(tag_name) {
            this.transitionToURL("https://share.osf.io", {tags: tag_name})
        }



    }

});
