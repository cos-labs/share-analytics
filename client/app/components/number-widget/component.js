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
    },

    didReceiveAttrs() {
        this._super(...arguments);
        var unformatted = this.total
        if (!unformatted) {
            unformatted = this.settings.value
        }
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
                queryParams["query"] = "*";
                delete queryParams["tags"];
                debugger;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        }

    }

});
