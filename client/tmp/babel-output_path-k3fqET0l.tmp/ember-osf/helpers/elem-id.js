define('ember-osf/helpers/elem-id', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  exports.elemId = elemId;

  /**
   * @module ember-osf
   * @submodule helpers
   */

  /**
   * Generate a unique HTML element ID for this element. Given "someid" for component instance 123, returns "ember123-someid"
   *
   * Useful to ensure unique IDs, eg for when component is reused in page.
   * @class elem-id
   * @param {Ember.Object} obj The instance with ID to use
   * @param {Ember.suffix} suffix The base attribute to name
   */

  function elemId(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var obj = _ref2[0];
    var suffix = _ref2[1];

    _ember['default'].assert('Must pass a valid object', obj);
    return _ember['default'].guidFor(obj) + '-' + suffix;
  }

  exports['default'] = _ember['default'].Helper.helper(elemId);
});