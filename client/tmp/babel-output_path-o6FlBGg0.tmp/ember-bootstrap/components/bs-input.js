define('ember-bootstrap/components/bs-input', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   Extends Ember.TextField to add Bootstrap's 'form-control' class.
  
   @class Input
   @namespace Components
   @extends Ember.TextField
   @public
   */
  exports['default'] = _ember['default'].TextField.extend({
    classNames: ['form-control']
  });
});