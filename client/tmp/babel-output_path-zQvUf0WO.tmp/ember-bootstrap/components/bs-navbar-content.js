define('ember-bootstrap/components/bs-navbar-content', ['exports', 'ember', 'ember-bootstrap/components/bs-collapse', 'ember-bootstrap/components/bs-navbar', 'ember-bootstrap/templates/components/bs-navbar-content'], function (exports, _ember, _emberBootstrapComponentsBsCollapse, _emberBootstrapComponentsBsNavbar, _emberBootstrapTemplatesComponentsBsNavbarContent) {
  'use strict';

  /**
   * Component to wrap the collapsible content of a [Components.Navbar](Components.Navbar.html) component.
   * Have a look there for examples.
   *
   * @class NavbarContent
   * @namespace Components
   * @extends Components.Collapse
   * @public
   */
  exports['default'] = _emberBootstrapComponentsBsCollapse['default'].extend({
    layout: _emberBootstrapTemplatesComponentsBsNavbarContent['default'],

    classNames: ['navbar-collapse'],

    navbar: _ember['default'].computed(function () {
      return this.nearestOfType(_emberBootstrapComponentsBsNavbar['default']);
    }),

    collapsed: _ember['default'].computed.reads('navbar.collapsed')
  });
});