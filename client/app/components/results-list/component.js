import Ember from 'ember';

const ucsd_lucene_query = 'contributors:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20publishers:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20funders:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20title:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20hosts:(UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego")%20OR%20%20tags:ucsd%20OR%20tags:"scripps%20institution%20of%20oceanography"';

export default Ember.Component.extend({

    data : [],

    init(){
        this._super(...arguments);
        this.set('data', this.get('data.hits.hits'));
        //this.processData(this.get('data'));
    },

    processData (data) {
        this.set('data', data.map((raw_datum) => {
            let processed_datum = {
                number: raw_datum.doc_count,
                name: raw_datum.key,
            };
            if (this.get("chartType") === "tagsList") {
                processed_datum["url"] = "https://share.osf.io/discover?q=" + ucsd_lucene_query + "&tags=" + raw_datum["key"];
            }
            return processed_datum;
        }));
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
