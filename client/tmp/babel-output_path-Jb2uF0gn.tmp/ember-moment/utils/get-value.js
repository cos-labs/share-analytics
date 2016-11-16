define('ember-moment/utils/get-value', ['exports', 'ember', 'ember-moment/utils/is-descriptor'], function (exports, _ember, _emberMomentUtilsIsDescriptor) {
  // source: ember-cpm
  // https://github.com/cibernox/ember-cpm/blob/7b974567c92e45a815ee18c6cb62e3ba1fa99f1d/addon/utils.js#L75-L99

  'use strict';

  var typeOf = _ember['default'].typeOf;
  var get = _ember['default'].get;

  /**
   Evaluate a value, which could either be a property key or a literal
   if the value is a string, the object that the computed property is installed
   on will be checked for a property of the same name. If one is found, it will
   be evaluated, and the result will be returned. Otherwise the string value its
   self will be returned
   All non-string values pass straight through, and are returned unaltered
   @method getVal
   @param val value to evaluate
   */
  function getValue(val) {
    if (typeOf(val) === 'string') {
      var propVal = get(this, val);

      return 'undefined' === typeof propVal ? val : propVal;
    } else if ((0, _emberMomentUtilsIsDescriptor['default'])(val)) {
      var funcName = val.func ? 'func' : // Ember < 1.11
      '_getter'; // Ember >= 1.11
      return val.altKey ? get(this, val.altKey) : val[funcName].apply(this);
    } else {
      return val;
    }
  }

  exports['default'] = getValue;
});