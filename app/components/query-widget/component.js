import Ember from 'ember';

export default Ember.Component.extend({

    init () {
        this._super(...arguments);
        this.set("query", this.get("parameters").query);
    },

    actions: {

        transitionToFacet(parameter) {
            let queryParams = {};
            queryParams["query"] = parameter;
            this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
        }

    }

});
