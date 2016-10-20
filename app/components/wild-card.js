import Ember from 'ember';

export default Ember.Component.extend({
    
    actions: {
        removeChart: function() {
            this.sendAction('removeChart','wildcard');
        }
    },
    
});
