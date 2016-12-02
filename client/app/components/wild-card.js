import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['spinner'],

    actions: {
        removeChart: function() {
            this.sendAction('removeChart','wildcard');
        }
    },

});
