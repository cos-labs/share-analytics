import Ember from 'ember';

export default Ember.Controller.extend({    

    q: 'UC Santa Barbara',
    gte: "1996",
    lte: "2017",
    
    // Initialize the three interchangeable charts to be rendered as sortableObjects
    sortableObjectList: [{isDonut: true}, {isBar: true}, {isWildcard: true}],
    
    addableList: [],
    
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
            
        },
        
        removeChart: function(chart) {
            if(chart === 'donut') { // If we're removing the donut chart
                this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) { 
                    return !(item.isDonut); // Filter for all array elements that aren't the donut chart
                }));
                this.get('addableList').addObject({isDonut: true});
            }
            else if(chart === 'bar') { // If we're removing the bar chart
                this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) { 
                    return !(item.isBar); // Filter for all array elements that aren't the bar chart
                }));
                this.get('addableList').addObject({isBar: true});
            }
            else if(chart === 'wildcard') { // If we're removing the wildcard chart
                this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) { 
                    return !(item.isWildcard); // Filter for all array elements that aren't the wildcard chart
                }));
                this.get('addableList').addObject({isWildcard: true});
            }
            this.get('sortableObjectList').addObject({isPlaceholder: true}); // Always add a placeholder "chart" in the place of the removed chart
        },
        
        addChart: function(option) {
            if(option.isDonut) {
                this.get('sortableObjectList').addObject({isDonut: true});
                this.set('addableList', this.get('addableList').filter(function(item, index, enumerable) { 
                    return !(item.isDonut); // Remove donut from the list of addable charts
                }));
            }
            else if(option.isBar) {
                this.get('sortableObjectList').addObject({isBar: true});
                this.set('addableList', this.get('addableList').filter(function(item, index, enumerable) { 
                    return !(item.isBar); // Remove bar from the list of addable charts
                }));
            }
            else if(option.isWildcard) {
                this.get('sortableObjectList').addObject({isWildcard: true});
                this.set('addableList', this.get('addableList').filter(function(item, index, enumerable) { 
                    return !(item.isWildcard); // Remove wildcard from the list of addable charts
                }));
            }
            // Note that the remainder of this function is a really f*ckn weird way to:
            // 1. Remove the SINGLE placeholder we just replaced with a chart
            // 2. Add back any placeholders that are still necessary to fill the row with 3 elements
            // This is necessary because the filtering method below will remove ALL of the placeholders, not just one
            // Unfortunately, Ember array methods that would enable the removal of just one placeholder (e.g. lastIndexOf, removeObject, etc.) aren't working
            this.set('sortableObjectList', this.get('sortableObjectList').filter(function(item, index, enumerable) { 
                return !(item.isPlaceholder); // Remove all placeholders from the array of charts to be displayed (we don't want this as our end result)
            }));
            let l = this.get('sortableObjectList').length; 
            if(l < 3) { // If we're now displaying fewer than 3 charts
                let n = 3 - l;
                let i = 0;
                while(i < n) { // Add placeholder charts back until we're displaying 3 charts
                    this.get('sortableObjectList').addObject({isPlaceholder: true});
                    i++;
                }
            }
        },
        
    },
    
    sortableObjectListChanged: Ember.observer('sortableObjectList', function() {
        
    }),
    
    
});
