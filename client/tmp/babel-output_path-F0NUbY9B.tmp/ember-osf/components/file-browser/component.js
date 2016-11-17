define('ember-osf/components/file-browser/component', ['exports', 'ember', 'ember-osf/components/file-browser/template', 'ember-osf/utils/load-relationship'], function (exports, _ember, _emberOsfComponentsFileBrowserTemplate, _emberOsfUtilsLoadRelationship) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /*
     * Wrapper for file items. Includes state for the item's row.
     *
     */
    var FileItem = _ember['default'].ObjectProxy.extend({
        isSelected: false,

        // TODO (Abram) update childItems when `children` or `files` changes
        // TODO (Abram) catch and display errors
        childItems: _ember['default'].computed('_files.[]', '_children.[]', function () {
            var files = this._setupLoadAll('files', '_files', '_filesLoaded');
            var children = this._setupLoadAll('children', '_children', '_childrenLoaded');

            var wrappedItems = _ember['default'].A();
            if (files) {
                wrappedItems.addObjects(files.map(wrapItem));
            }
            if (children) {
                wrappedItems.addObjects(children.map(wrapItem));
            }
            return wrappedItems;
        }),
        _files: null,
        _children: null,

        childItemsLoaded: _ember['default'].computed.and('_filesLoaded', '_childrenLoaded'),
        _filesLoaded: false,
        _childrenLoaded: false,

        _setupLoadAll: function _setupLoadAll(relationship, destName, loaded) {
            var _this = this;

            var dest = this.get(destName);
            if (dest === null) {
                var model = this.get('content');
                if (relationship in model) {
                    dest = this.set(destName, _ember['default'].A());
                    (0, _emberOsfUtilsLoadRelationship['default'])(model, relationship, dest).then(function () {
                        _this.set(loaded, true);
                    });
                } else {
                    this.set(loaded, true);
                }
            }
            return dest;
        }
    });

    function wrapItem(item) {
        if (item instanceof FileItem) {
            return item;
        }
        return FileItem.create({
            content: item
        });
    }

    function unwrapItem(item) {
        if (item instanceof FileItem) {
            return item.get('content');
        }
        return item;
    }

    /**
     * File browser widget
     *
     * Sample usage:
     * ```handlebars
     * {{file-browser
     *  rootItem=item
     *  openFile=(action 'openFile')
     *  openNode=(action 'openNode')}}
     * ```
     * @class file-browser
     */
    exports['default'] = _ember['default'].Component.extend({
        // TODO: Improve documentation in the future
        layout: _emberOsfComponentsFileBrowserTemplate['default'],
        classNames: ['file-browser'],
        itemHeight: 30,

        breadcrumbs: null,

        rootItem: _ember['default'].computed('breadcrumbs.[]', {
            get: function get() {
                return this.get('breadcrumbs.firstObject');
            },
            set: function set(_, item) {
                var wrappedItem = wrapItem(item);
                this.set('breadcrumbs', _ember['default'].A([wrappedItem]));
            }
        }),
        atRoot: _ember['default'].computed.equal('breadcrumbs.length', 1),
        currentParent: _ember['default'].computed.readOnly('breadcrumbs.lastObject'),
        items: _ember['default'].computed.readOnly('currentParent.childItems'),
        itemsLoaded: _ember['default'].computed.readOnly('currentParent.childItemsLoaded'),
        selectedItems: _ember['default'].computed.filterBy('items', 'isSelected', true),

        loadedChanged: _ember['default'].observer('itemsLoaded', function () {
            var containerWidth = this.$().width();
            this.set('itemWidth', containerWidth);
        }),

        actions: {
            selectItem: function selectItem(item) {
                item.set('isSelected', true);
                if (item.get('isFile') && this.get('selectFile')) {
                    this.sendAction('selectFile', unwrapItem(item));
                }
                if (item.get('isNode') && this.get('selectNode')) {
                    this.sendAction('selectNode', unwrapItem(item));
                }
            },

            openItem: function openItem(item) {
                if (item.get('isFile') && this.get('openFile')) {
                    this.sendAction('openFile', unwrapItem(item));
                }
                if (item.get('isNode') && this.get('openNode')) {
                    this.sendAction('openNode', unwrapItem(item));
                }
                if (item.get('canHaveChildren')) {
                    this.send('navigateToItem', item);
                }
            },

            navigateToItem: function navigateToItem(item) {
                var breadcrumbs = this.get('breadcrumbs');
                var index = breadcrumbs.indexOf(item);
                if (index === -1) {
                    // TODO: Valid to assume item is a child of currentParent?
                    breadcrumbs.pushObject(item);
                } else {
                    var slicedBread = breadcrumbs.slice(0, index + 1);
                    this.set('breadcrumbs', _ember['default'].A(slicedBread));
                }
            },

            navigateUp: function navigateUp() {
                var breadcrumbs = this.get('breadcrumbs');
                if (breadcrumbs.length === 1) {
                    return;
                }
                breadcrumbs.popObject();
            }
        }
    });
});