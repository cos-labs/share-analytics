define('ember-radio-buttons/components/radio-button', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    tagName: 'input',
    type: 'radio',
    attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

    value: null,
    checked: null,

    htmlChecked: _ember['default'].computed('value', 'checked', function () {
      return this.get('value') === this.get('checked');
    }),

    change: function change() {
      this.set('checked', this.get('value'));
    },

    _setCheckedProp: function _setCheckedProp() {
      if (!this.$()) {
        return;
      }
      this.$().prop('checked', this.get('htmlChecked'));
    },

    _updateElementValue: _ember['default'].observer('htmlChecked', function () {
      _ember['default'].run.once(this, '_setCheckedProp');
    })
  });
});