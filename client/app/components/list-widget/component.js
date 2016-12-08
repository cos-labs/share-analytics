import Ember from 'ember';

export default Ember.Component.extend({
    data : [],
    generateLink () {
        // generate link for single item
    },
    processData () {
        // loop through data and do things

    },
    init(){
        this._super(...arguments);
        this.get('data').pushObject({number : 23, name :'Jeanne Khalid'});
        //this.processData();
    }
});
