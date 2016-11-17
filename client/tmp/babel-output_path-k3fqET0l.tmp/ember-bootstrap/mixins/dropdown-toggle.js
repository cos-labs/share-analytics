define('ember-bootstrap/mixins/dropdown-toggle', ['exports', 'ember', 'ember-bootstrap/mixins/component-child'], function (exports, _ember, _emberBootstrapMixinsComponentChild) {
  'use strict';

  /**
   * Mixin for components that act as dropdown toggles.
   *
   * @class DropdownToggle
   * @namespace Mixins
   * @private
   */
  exports['default'] = _ember['default'].Mixin.create(_emberBootstrapMixinsComponentChild['default'], {
    classNames: ['dropdown-toggle'],

    /**
     * @property ariaRole
     * @default button
     * @type string
     * @protected
     */
    ariaRole: 'button',

    targetObject: _ember['default'].computed.alias('parentView'),

    /**
     * The default action is set to "toggleDropdown" on the parent {{#crossLink "Components.Dropdown"}}{{/crossLink}}
     *
     * @property action
     * @default toggleDropdown
     * @type string
     * @protected
     */
    action: 'toggleDropdown'
  });
});