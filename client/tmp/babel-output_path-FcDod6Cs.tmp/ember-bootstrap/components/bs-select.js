define('ember-bootstrap/components/bs-select', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   Selectbox component.
  
   #### Deprecated ####
  
   Usage of this component is deprecated. Please use one of the better alternatives for select boxes in Ember, as one of
   those: https://www.emberaddons.com/?query=select%20component.
  
   If you use it with a FormElement component as in `{{bs-form-element controlType="select" ... }}`, then see the section
   on custom Controls in [Components.FormElement](Components.FormElement.html) to learn how to replace this with an external
   select component.
  
   @class Select
   @namespace Components
   @extends Ember.Component
   @deprecated
   @public
   */
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'select',
    classNames: ['form-control'],

    attributeBindings: ['disabled', 'required'],
    disabled: false,
    required: false,

    content: null,
    prompt: null,
    optionValuePath: 'id',
    optionLabelPath: 'title',
    action: _ember['default'].K, // action to fire on change

    value: null,

    init: function init() {
      this._super.apply(this, arguments);

      _ember['default'].deprecate('bs-select is deprecated and will be removed in the future. Please use a dedicated addon for select box components', false, {
        url: 'http://kaliber5.github.io/ember-bootstrap/api/classes/Components.Select.html',
        until: '0.8.0',
        id: 'ember-bootstrap.component.select'
      });

      if (!this.get('content')) {
        this.set('content', []);
      }
    },

    change: function change() {
      var selectEl = this.$().get(0);
      var selectedIndex = selectEl.selectedIndex;

      var content = this.get('content');

      // decrement index by 1 if we have a prompt
      var hasPrompt = !!this.get('prompt');
      var contentIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;

      var selection = content[contentIndex];

      // set the local, shadowed selection to avoid leaking
      // changes to `selection` out via 2-way binding
      this.set('value', selection);

      var changeCallback = this.get('action');
      changeCallback(selection);
    }
  });
});