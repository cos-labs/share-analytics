import Ember from 'ember';

export default Ember.Controller.extend({    

    q: 'UC Santa Barbara',
    
    actions: {
        
        changeQ: function(query) {
            this.set('q',query);
        },
        
    }
    
});
