import Ember from 'ember';

export default Ember.Component.extend({
    data : [],
    generateLink () {
        // generate link for single item
    },
    processData (data) {
        // loop through data and do things
        for (let item of data){
            this.get('data').pushObject({number : item.doc_count, name :item.key});
        }
    },
    init(){
        this._super(...arguments);
        this.processData(this.get('aggregations.contributors.buckets'));
    }
});
