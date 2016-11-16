define('ember-moment/utils/is-descriptor', ['exports', 'ember'], function (exports, _ember) {
  // source: ember-cpm
  // https://github.com/cibernox/ember-cpm/blob/7b974567c92e45a815ee18c6cb62e3ba1fa99f1d/addon/utils.js#L17-L20

  'use strict';

  var typeOf = _ember['default'].typeOf;
  var Descriptor = _ember['default'].Descriptor;

  function isDescriptor(prop) {
    return typeOf(prop) === 'object' && (prop.constructor === Descriptor || // Ember < 1.11
    prop.isDescriptor); // Ember >= 1.11.0
  }

  exports['default'] = isDescriptor;
});