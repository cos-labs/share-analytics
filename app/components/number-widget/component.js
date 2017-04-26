import Ember from 'ember';

export default Ember.Component.extend({

    total: null,

    settings : {
        fontSize: 3,
        fontColor: '#F44336',
        pre:'',
        post: ''
    },

    init () {
        this._super(...arguments);
        let settings = this.get('widgetSettings');
        if(settings){
            this.set('settings', settings);
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);
        var unformatted = this.total || 0;
        this.set('total', unformatted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    },

    actions: {

        transitionToFacet() { //Two different items here; one refers to the widget; one refers to the datum.
            let queryParams = {};
            var facet = this.get("item.facetDashParameter");
            let facetDash = this.get("item.facetDash");
            if (facetDash === "url" && item.url) {
                window.location.href = item.url;
                return;
            }
            if (facetDash) {
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        }

    }

});
