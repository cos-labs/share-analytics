import Ember from 'ember';

export default Ember.Component.extend({
    
    actions: {
        addChart: function(option) {
            this.sendAction('addChart',option);
        },
    }
    
});
