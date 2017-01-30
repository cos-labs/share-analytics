import Ember from 'ember';
import ENV from 'analytics-dashboard/config/environment';


export default Ember.Component.extend({

    data: [],
    dataAsString: "",

    init(){
        this._super(...arguments);
        this.processData(this.get("data.hits.hits"));
    },

    processData: function(data) {
        debugger;
        this.set("data", data[0]);
        this.set("dataAsString", JSON.stringify(data[0],  null, '\t'));
    },

    actions: {

        transitionToFacet(item) {
            let queryParams = {};
            var facet = this.get("item.facetDashParameter");
            if (facet) {
                queryParams[facet] = item.name;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            } else if (item.url) {
              window.location.href = item.url;
            }
        },

        transitionToViewAll(item) {
            this.attrs.transitionToFacet(item.dataType, item);
        }

    }

});
