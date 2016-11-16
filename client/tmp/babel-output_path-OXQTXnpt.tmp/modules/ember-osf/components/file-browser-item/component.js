import Ember from 'ember';
import layout from './template';

/**
 * @module ember-osf
 * @submodule components
 */

export default Ember.Component.extend({
    layout: layout,
    classNames: ['file-browser-item'],

    selected: Ember.computed('selectedItems.[]', function () {
        // TODO: This would be better if selectedItems were a hash. Can Ember
        // observe when properties are added to or removed from an object?
        var selectedItems = this.get('selectedItems');
        var index = selectedItems.indexOf(this.get('item'));
        return index > -1;
    }),

    click: function click() {
        this.sendAction('selectItem', this.get('item'));
    },

    doubleClick: function doubleClick() {
        var item = this.get('item');
        if (item.get('canHaveChildren')) {
            this.sendAction('navigateToItem', item);
        } else {
            this.sendAction('openItem', item);
        }
    },

    actions: {
        open: function open() {
            this.sendAction('openItem', this.get('item'));
        }
    }
});