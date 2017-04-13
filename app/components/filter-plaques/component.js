import Ember from 'ember';

export default Ember.Component.extend({

    init () {
        this._super(...arguments);
        let parameters = this.get('parameters');
        this.set('filters', Object.keys(parameters).map((key, idx, arr) => {
            return {
                "key": key,
                "value": parameters[key]
            }
        }).filter((item) => {
            if (item.key == "page") {
                return false;
            }
            return true;
        }));
    },

    actions: {

        removeFilter(filter) {
            let queryParams = {};
            queryParams[filter.key] = undefined;
            this.attrs.transitionToFacet("search", queryParams);
        },

        transitionToFacet(parameter, parameterValue) {
            let queryParams = {};
            queryParams[parameter] = parameterValue;
            this.attrs.transitionToFacet("search", queryParams);
        }

    }

});
