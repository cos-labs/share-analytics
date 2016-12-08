import Ember from 'ember';

export default Ember.Component.extend({
    data : [],
    processData (data) {
        this.set('data', []);
        // loop through data and do things
        for (let item of data){
            this.get('data').pushObject({number : item.doc_count, name :item.key});
        }
    },
    init(){
        this._super(...arguments);
        this.processData(this.get('aggregations.listWidgetData.buckets'));
    }
});
