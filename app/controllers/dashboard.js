import Ember from 'ember';

export default Ember.Controller.extend({    

    q: 'UC Santa Barbara',
    gte: "1996",
    lte: "2017",
    
    // Define boolean variables to represent the chart types being rendered
    donut: true,
    bar: true,
    wildcard: true,
    extra1: false,
    placeholder: false,
    
    // The three interchangeable charts to be rendered as sortableObjects
    sortableObjectList: [{isDonut: true}, {isBar: true}, {isWildcard: true}],
    
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
        
        sortEndAction: function() {
            
        }
        
    },
    
    donutChanged: Ember.observer('donut', function() {
        if(this.get('donut')) { // If we checked the donut box and want to add this chart to the dash
            if (this.get('sortableObjectList').length > 2) { // First we need to make sure that we don't already have 3 charts in there
                console.log('No can do'); // If we do, send an error message saying that at least one chart must be removed first
            }
            else { // If we don't, push the donut chart into sortableObjectList array
                this.get('sortableObjectList').addObject({isDonut: true});
            }
        }
        else { // If we unchecked the donut box and want to remove this chart from the dash
            this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) { // Note: A.removeObject({isDonut: true}) wasn't working, hence this sh*t
                return !(item.isDonut) // Filter for all array elements that aren't the donut chart
            }));
        }
    }),
    
    barChanged: Ember.observer('bar', function() {
        if(this.get('bar')) { 
            if (this.get('sortableObjectList').length > 2) { 
                console.log('No can do'); 
            }
            else { 
                this.get('sortableObjectList').addObject({isBar: true});
            }
        }
        else { 
            this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) { 
                return !(item.isBar) // Filter for all array elements that aren't the donut chart
            }));
        }
    }),
    
    wildcardChanged: Ember.observer('wildcard', function() {
        if(this.get('wildcard')) { 
            if (this.get('sortableObjectList').length > 2) { 
                console.log('No can do'); 
            }
            else { 
                this.get('sortableObjectList').addObject({isWildcard: true});
            }
        }
        else { 
            this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) { 
                return !(item.isWildcard) // Filter for all array elements that aren't the donut chart
            }));
        }
    }),
    
    extra1Changed: Ember.observer('extra1', function() {
        if(this.get('extra1')) { 
            if (this.get('sortableObjectList').length > 2) { 
                console.log('No can do'); 
            }
            else { 
                this.get('sortableObjectList').addObject({isExtra1: true});
            }
        }
        else { 
            this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) { 
                return !(item.isExtra1) // Filter for all array elements that aren't the donut chart
            }));
        }
    }),
    
    sortableObjectListChanged: Ember.observer('sortableObjectList', function() {
        
    }),
    
    
});
