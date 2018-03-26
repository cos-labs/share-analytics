import Ember from 'ember';
import ENV from 'sa-dashboard/config/environment';


export default Ember.Component.extend({

    agentData: Ember.computed(function() {
        return this.get('data.hits.hits')[0];
    }),
    dataAsString: Ember.computed(function() {
        var data = this.get('data.hits.hits')[0];
        return JSON.stringify(data, null, '    ');
    }),
    showJSON: false,

    actions: {

        transitionToFacet(item) {
            let queryParams = {
                id: undefined
            };
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
