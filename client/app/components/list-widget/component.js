import Ember from 'ember';

export default Ember.Component.extend({
    data : [],
    init(){
        this._super(...arguments);
        this.processData(this.get('aggregations.listWidgetData.buckets'));
        console.log(this.get('item'));
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
