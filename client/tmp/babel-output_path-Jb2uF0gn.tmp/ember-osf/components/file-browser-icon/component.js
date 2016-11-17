define('ember-osf/components/file-browser-icon/component', ['exports', 'ember', 'ember-osf/components/file-browser-icon/template'], function (exports, _ember, _emberOsfComponentsFileBrowserIconTemplate) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * Display the correct file tree icon for on the item to be displayed
     *
     * Sample usage:
     * ```handlebars
     * {{file-browser-icon
     * item=item}}
     * ```
     * @class file-browser-icon
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileBrowserIconTemplate['default'],
        tagName: 'span',

        iconName: _ember['default'].computed('item', 'item.expanded', function () {
            // TODO: More icons!
            if (this.get('item.isNode')) {
                // TODO node types
                return 'cube';
            }
            if (this.get('item.isProvider')) {
                // TODO provider-specific icons
                return 'hdd-o';
            }
            if (this.get('item.isFolder')) {
                return 'folder';
            }
            // TODO file types
            return 'file-o';
        })
    });
});