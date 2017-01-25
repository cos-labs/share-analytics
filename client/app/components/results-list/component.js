import Ember from 'ember';

export default Ember.Component.extend({

    data : [],

    init(){
        this._super(...arguments);
        this.set('data', this.get('data.hits.hits'));
        //this.processData(this.get('data'));
    },

    processData (data) {
        this.set('data', data.map((item) => {
            return item;
        }));
    },

    actions: {

        transitionToFacet(parameter) {
            let queryParams = {};
            queryParams[this.get("item.facetDashParameter")] = parameter.name;
            this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
        }

    }

});
