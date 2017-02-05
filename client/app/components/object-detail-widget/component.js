import Ember from 'ember';
import ENV from 'analytics-dashboard/config/environment';


export default Ember.Component.extend({

    showJSON: false,

    objectData: Ember.computed(function() {
        return this.get('data.hits.hits')[0];
    }),

    dataAsString: Ember.computed(function() {
        var data = this.get('data.hits.hits')[0];
        return JSON.stringify(data, null, '    ');
    }),

    init() {
        this._super(...arguments);
        //processData();
    },

    processData (data) {
        this.set('contributors', objectData.lists.contributors.map((contributor) => {
            contributor.id
            return processed_datum;
        }).filter((datum) => {
            if (this.get("chartType") === "tagsList") {
                if (tag_blacklist.indexOf(datum.name) >= 0) {
                    //return false;
                }
            }
            return true;
        }));
    },
    actions: {

        transitionToFacet(facetDash, parameterName, parameter) {
            let queryParams = {
                id: undefined
            };
            queryParams[parameterName] = parameter;
            this.attrs.transitionToFacet(facetDash, queryParams);
        },

        transitionToSHARE(item) {
              window.location.href = item.url;
        },

        transitionToViewAll(item) {
            this.attrs.transitionToFacet(item.dataType, item);
        }

    }

});
