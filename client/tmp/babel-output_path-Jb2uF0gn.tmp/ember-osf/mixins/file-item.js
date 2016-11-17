define('ember-osf/mixins/file-item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule mixins
   */

  /**
   * File-like models are `node`, `file-provider`, and `file`/folder.
   * This mixin provides a polymorphic interface for file-like items, and is intended to be used with models.
   *
   * @class FileItemMixin
   * @extends Ember.Mixin
   */
  exports['default'] = _ember['default'].Mixin.create({
    itemName: _ember['default'].computed.or('name', 'title'),
    // https://github.com/emberjs/ember.js/issues/14014
    // isNode: Ember.computed.equal('constructor.modelName', 'node'),
    // isProvider: Ember.computed.equal('constructor.modelName', 'file-provider'),
    isNode: false,
    isProvider: false,
    isFolder: _ember['default'].computed.and('_isFileModel', '_isFolder'),
    isFile: _ember['default'].computed.and('_isFileModel', '_isFile'),
    canHaveChildren: _ember['default'].computed.or('isNode', 'isProvider', 'isFolder'),

    // _isFileModel: Ember.computed.equal('constructor.modelName', 'file'),
    _isFileModel: false,
    _isFolder: _ember['default'].computed.equal('kind', 'folder'),
    _isFile: _ember['default'].computed.equal('kind', 'file')
  });
});