define('ember-moment/computeds/moment', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _emberMomentComputedsBase) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports['default'] = (0, _emberMomentComputedsBase['default'])(function momentComputed(params) {
    return _moment['default'].apply(undefined, _toConsumableArray(params));
  });
});