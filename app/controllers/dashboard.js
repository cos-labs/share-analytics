import Ember from 'ember';

export default Ember.Controller.extend({    

    q: 'UC Santa Barbara',
    gte: "1996-01-01",
    lte: "2017",
    p: '*',
    
    actions: {
        
        changeQ: function(query) {
            this.set('q',query);
        },
        
        changeGte: function(g) {
            this.set('gte',g);
        },
        
        changeLte: function(l) {
            this.set('lte',l);
        },
        
    }
    
});
