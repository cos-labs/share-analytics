define('ember-moment/computeds/to-now', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _emberMomentComputedsBase) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports['default'] = (0, _emberMomentComputedsBase['default'])(function toNowComputed(params) {
    var maybeHidePrefix = undefined;

    if (params.length > 1) {
      maybeHidePrefix = params.pop();
    }

    return _moment['default'].apply(undefined, _toConsumableArray(params)).toNow(maybeHidePrefix);
  });
});