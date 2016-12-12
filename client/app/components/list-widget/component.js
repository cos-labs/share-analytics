import Ember from 'ember';

export default Ember.Component.extend({

    data : [],

    init(){
        this._super(...arguments);
        this.processData(this.get('aggregations.listWidgetData.buckets'));
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
            let queryParams = {
                "id": parameter
            };
            this.attrs.transitionToFacet('topic', queryParams);
        }

    }

});
