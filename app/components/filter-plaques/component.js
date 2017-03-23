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
        if (settings) {
            this.set('settings', settings);
        }
    },

    actions: {

        removeFilter(filter) {
            let queryParams = {};
            queryParams[filter.key] = undefined;
            this.attrs.transitionToFacet("resultsList", queryParams);
        },

        transitionToFacet(parameter, parameterValue) {
            let queryParams = {};
            queryParams[parameter] = parameterValue;
            this.attrs.transitionToFacet("resultsList", queryParams);
        }

    }

});
