define('ember-bootstrap/mixins/component-child', ['exports', 'ember', 'ember-bootstrap/mixins/component-parent'], function (exports, _ember, _emberBootstrapMixinsComponentParent) {
  'use strict';

  /**
   * Mixin for components that act as a child component in a parent-child relationship of components
   *
   * @class ComponentChild
   * @namespace Mixins
   * @private
   */
  exports['default'] = _ember['default'].Mixin.create({

    /**
     * flag to check if component has already been rendered, for the `_willRender` event handler
     * @property _didInsert
     * @type boolean
     * @private
     */
    _didInsert: false,

    /**
     * Register ourself as a child at the parent component
     * We use the `willRender` event here to also support the fastboot environment, where there is no `didInsertElement`
     *
     * @method _willRender
     * @private
     */
    _willRender: _ember['default'].on('willRender', function () {
      if (!this._didInsert) {
        this._didInsert = true;
        var _parent = this.nearestOfType(_emberBootstrapMixinsComponentParent['default']);
        if (_parent) {
          _parent.registerChild(this);
          this.set('_parent', _parent);
        }
      }
    }),

    /**
     * stores the parent in didInsertElement hook as a work-a-round for
     * https://github.com/emberjs/ember.js/issues/12080
     *
     * @property _parent
     * @private
     */
    _parent: null,

    /**
     * Unregister form the parent component
     *
     * @method _willDestroyElement
     * @private
     */
    _willDestroyElement: _ember['default'].on('willDestroyElement', function () {
      var parent = this.nearestOfType(_emberBootstrapMixinsComponentParent['default']) || this.get('_parent');
      if (parent) {
        parent.removeChild(this);
      }
    })
  });
});