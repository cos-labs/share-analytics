define('ember-bootstrap/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-nav', 'ember-bootstrap/templates/components/bs-navbar-nav'], function (exports, _emberBootstrapComponentsBsNav, _emberBootstrapTemplatesComponentsBsNavbarNav) {
  'use strict';

  /**
   * Component for the `.nav` element within a [Components.Navbar](Components.Navbar.html)
   * component. Have a look there for examples.
   *
   * Per [the bootstrap docs](http://getbootstrap.com/components/#navbar),
   * justified navbar nav links are not supported.
   *
   * @class NavbarNav
   * @namespace Components
   * @extends Components.Nav
   * @public
   */
  exports['default'] = _emberBootstrapComponentsBsNav['default'].extend({
    layout: _emberBootstrapTemplatesComponentsBsNavbarNav['default'],

    classNames: ['navbar-nav'],

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.set('justified', false);
    }
  });
});