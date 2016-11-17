define('ember-bootstrap/components/bs-navbar-toggle', ['exports', 'ember', 'ember-bootstrap/components/bs-button', 'ember-bootstrap/components/bs-navbar', 'ember-bootstrap/templates/components/bs-navbar-toggle'], function (exports, _ember, _emberBootstrapComponentsBsButton, _emberBootstrapComponentsBsNavbar, _emberBootstrapTemplatesComponentsBsNavbarToggle) {
  'use strict';

  /**
   * Component to implement the responsive menu toggle behavior in a [Components.Navbar](Components.Navbar.html)
   * component. Have a look there for examples.
   *
   * The button `toggle` property will always be set to `true` in this component.
   *
   * @class NavbarToggle
   * @namespace Components
   * @extends Components.Button
   * @public
   */
  exports['default'] = _emberBootstrapComponentsBsButton['default'].extend({
    layout: _emberBootstrapTemplatesComponentsBsNavbarToggle['default'],

    classNames: ['navbar-toggle', 'collapsed'],

    targetObject: _ember['default'].computed(function () {
      return this.nearestOfType(_emberBootstrapComponentsBsNavbar['default']);
    }).volatile(),

    action: 'toggleNavbar',

    actions: {
      toggleNavbar: function toggleNavbar() {
        this.sendAction();
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.set('toggle', true);
    }
  });
});