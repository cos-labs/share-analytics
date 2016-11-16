define('ember-osf/components/file-browser-item/component', ['exports', 'ember', 'ember-osf/components/file-browser-item/template'], function (exports, _ember, _emberOsfComponentsFileBrowserItemTemplate) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileBrowserItemTemplate['default'],
        classNames: ['file-browser-item'],

        selected: _ember['default'].computed('selectedItems.[]', function () {
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
});