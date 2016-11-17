define('ember-moment/computeds/duration', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _emberMomentComputedsBase) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports['default'] = (0, _emberMomentComputedsBase['default'])(function durationComputed(params) {
    return _moment['default'].duration.apply(_moment['default'], _toConsumableArray(params));
  });
});