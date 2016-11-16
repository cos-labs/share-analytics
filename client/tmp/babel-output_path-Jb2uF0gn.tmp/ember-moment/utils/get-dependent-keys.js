define('ember-moment/utils/get-dependent-keys', ['exports', 'ember', 'ember-moment/utils/is-descriptor'], function (exports, _ember, _emberMomentUtilsIsDescriptor) {
  // source: ember-cpm
  // https://github.com/cibernox/ember-cpm/blob/7b974567c92e45a815ee18c6cb62e3ba1fa99f1d/addon/utils.js#L49-L73

  'use strict';

  var typeOf = _ember['default'].typeOf;

  function getDependentKeys(argumentArr) {
    return argumentArr.reduce(function (out, item) {
      switch (typeOf(item)) {
        case 'string':
          var containsSpaces = item.indexOf(' ') !== -1;
          if (!containsSpaces) {
            out.push(item);
          }
          break;
        case 'boolean':
        case 'number':
          break;
        default:
          if (item && item._dependentKeys && (0, _emberMomentUtilsIsDescriptor['default'])(item)) {
            out = out.concat(item._dependentKeys);
          }
          break;
      }

      return out;
    }, []);
  }

  exports['default'] = getDependentKeys;
});