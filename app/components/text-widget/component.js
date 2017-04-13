import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        transitionToFacet(parameter) {
            let queryParams = {};
            queryParams["query"] = parameter;
            this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
        }
    }
});
