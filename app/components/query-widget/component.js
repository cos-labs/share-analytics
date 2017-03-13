import Ember from 'ember';

export default Ember.Component.extend({

    total: 'hello',

    settings : {
        fontSize: 3,
        fontColor: '#F44336',
        pre:'',
        post: '',
        value: 0
    },

    init () {
        this._super(...arguments);
        let settings = this.get('widgetSettings');
        if(settings){
            this.set('settings', settings);
        }
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
