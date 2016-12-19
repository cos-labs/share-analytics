import Ember from 'ember';

export default Ember.Component.extend({

    data : [],

    init(){
        this._super(...arguments);
        if (this.get('chartType') === 'recentlyAdded') {
            var data = this.get('data.hits.hits').map(function(hits, index) {
                return {
                    number: index + 1,
                    name: hits._source.title
                }
            });
            this.set('data', data);
        } else {
            this.processData(this.get('aggregations.listWidgetData.buckets'));
        }
    },

    processData (data) {
        this.set('data', data.map((item) => {
            return {
                number: item.doc_count,
                name: item.key,
            };
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
