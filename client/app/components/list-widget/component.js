import Ember from 'ember';

export default Ember.Component.extend({

    data : [],

    init(){
        this._super(...arguments);
        if (this.get('chartType') === 'recentlyAdded') {
            var data = this.get('data.hits.hits').map(function(hits, index) {
                return {
                    number: index + 1,
                    name: hits._source.title,
                    url: 'https://share.osf.io/article/' + hits._source.id
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
            var facet = this.get("item.facetDashParameter");
            if (facet) {
                queryParams[facet] = parameter.name;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            } else if (parameter.url) {
              window.location.href = parameter.url;
            }
        }
    }

});
