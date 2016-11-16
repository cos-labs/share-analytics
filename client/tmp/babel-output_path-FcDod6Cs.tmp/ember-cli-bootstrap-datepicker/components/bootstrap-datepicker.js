define('ember-cli-bootstrap-datepicker/components/bootstrap-datepicker', ['exports', 'ember', 'ember-cli-bootstrap-datepicker/components/datepicker-support'], function (exports, _ember, _emberCliBootstrapDatepickerComponentsDatepickerSupport) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_emberCliBootstrapDatepickerComponentsDatepickerSupport['default'], {
    instrumentDisplay: '{{input type="text"}}',

    classNames: ['ember-text-field'],

    tagName: 'input',

    attributeBindings: ['accesskey', 'autocomplete', 'autofocus', 'contenteditable', 'contextmenu', 'dir', 'disabled', 'draggable', 'dropzone', 'form', 'hidden', 'id', 'lang', 'list', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'spellcheck', 'step', 'tabindex', 'title', 'translate', 'type'],

    type: 'text'
  });
});