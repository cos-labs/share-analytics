import Ember from 'ember';

export default Ember.Component.extend({
    
//    Note: see 'append' section here http://packery.metafizzy.co/methods.html for info about adding new grid elements
    
    initGrid() {
        
        // Initialize our packery grid
        let grid = this.$('.grid');
        
        grid.packery({
            percentPosition: true,
            itemSelector: '.grid-item',
            gutter: 10,
        });
        
        // Grid elements are draggable
        grid.find('.grid-item').each( function( i, gridItem ) {
            var draggie = new Draggabilly( gridItem );
            // bind drag events to Packery
            grid.packery( 'bindDraggabillyEvents', draggie );
        });
        
        // Resize grid elements on click 
        // NOTE that in the future we want this to be encpsulated in some sort of button, etc.
        // Otherwise it happens any time you drag the element, which is really annoying
        // (Commenting out for now)
        /*grid.on( 'click', '.grid-item', function( event ) {
            var $item = $( event.currentTarget );
            // change size of item by toggling large class
            $item.toggleClass('grid-item--large');
            if ( $item.is('.grid-item--large') ) {
                // fit large item
                grid.packery( 'fit', event.currentTarget );
            } else {
                // back to small, shiftLayout back
                grid.packery('shiftLayout');
            }
        });*/
        
    },
    
    init() {
        this._super(...arguments);
    },
    
    didInsertElement() {
        this.initGrid();
    }

    
});
