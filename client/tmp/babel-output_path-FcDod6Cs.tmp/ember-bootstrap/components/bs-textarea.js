define('ember-bootstrap/components/bs-textarea', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   Extends Ember.TextArea to add Bootstrap's 'form-control' class.
  
   @class Textarea
   @namespace Components
   @extends Ember.TextArea
   @public
   */
  exports['default'] = _ember['default'].TextArea.extend({
    classNames: ['form-control']
  });
});