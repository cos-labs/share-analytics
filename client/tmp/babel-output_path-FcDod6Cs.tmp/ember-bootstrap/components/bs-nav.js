define('ember-bootstrap/components/bs-nav', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-nav'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsNav) {
  'use strict';

  var isPresent = _ember['default'].isPresent;

  /**
  
   Component to generate [bootstrap navs](http://getbootstrap.com/components/#nav)
  
   ### Usage
  
   Use in combination with the [Components.NavItem](Components.NavItem.html) component:
  
   ```hbs
   {{#bs-nav type="pills"}}
     {{#bs-nav-item}}
        {{#link-to "foo"}}Foo{{/link-to}}
     {{/bs-nav-item}}
     {{#bs-nav-item}}
       {{#link-to "bar"}}Bar{{/link-to}}
     {{/bs-nav-item}}
   {{/bs-nav}}
   ```
  
   ### Nav styles
  
   The component supports the default bootstrap nav styling options "pills" and "tabs" through the `type`
   property, as well as the `justified` and `stacked` properties.
  
   ### Active items
  
   Bootstrap expects to have the `active` class on the `<li>` element that should be the active (highlighted)
   navigation item. To achieve that just use the `link-to` helper as usual. If the link is active, i.e
   it points to the current route, the `bs-nav-item` component will detect that and apply the `active` class
   automatically. The same applies for the `disabled` state.
  
   ### Dropdowns
  
   Use the [Components.Dropdown](Components.Dropdown.html) component with a `tagName` of "li" to integrate a dropdown into your nav:
  
   ```hbs
   {{#bs-nav type="pills"}}
     {{#bs-nav-item}}{{#link-to "index"}}Home{{/link-to}}{{/bs-nav-item}}
     {{#bs-dropdown tagName="li"}}
       {{#bs-dropdown-toggle}}Dropdown <span class="caret"></span>{{/bs-dropdown-toggle}}
       {{#bs-dropdown-menu}}
         <li>{{#link-to "foo"}}Foo{{/link-to}}</li>
         <li>{{#link-to "bar"}}Bar{{/link-to}}</li>
       {{/bs-dropdown-menu}}
     {{/bs-dropdown}}
   {{/bs-nav}}
   ```
  
   @class Nav
   @namespace Components
   @extends Ember.Component
   @public
  
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsNav['default'],

    tagName: 'ul',
    classNames: ['nav'],

    classNameBindings: ['typeClass', 'justified:nav-justified', 'stacked:nav-stacked'],

    typeClass: _ember['default'].computed('type', function () {
      var type = this.get('type');
      if (isPresent(type)) {
        return 'nav-' + type;
      }
    }),

    /**
     * Special type of nav, either "pills" or "tabs"
     *
     * @property type
     * @type String
     * @default null
     * @public
     */
    type: null,

    /**
     * Make the nav justified, see [bootstrap docs](http://getbootstrap.com/components/#nav-justified)
     *
     * @property justified
     * @type boolean
     * @default false
     * @public
     */
    justified: false,

    /**
     * Make the nav pills stacked, see [bootstrap docs](http://getbootstrap.com/components/#nav-pills)
     *
     * @property stacked
     * @type boolean
     * @default false
     * @public
     */
    stacked: false
  });
});