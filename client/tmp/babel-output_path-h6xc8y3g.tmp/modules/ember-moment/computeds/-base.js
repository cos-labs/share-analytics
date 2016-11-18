

export default computedFactory;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import Ember from 'ember';

import getValue from '../utils/get-value';
import getDependentKeys from '../utils/get-dependent-keys';

var computed = Ember.computed;

function computedFactory(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var computedArgs = [].concat(getDependentKeys(args));

    computedArgs.push(function () {
      var _this = this;

      var params = args.map(function (arg) {
        return getValue.call(_this, arg);
      });

      return fn.call(this, params);
    });

    return computed.apply(undefined, _toConsumableArray(computedArgs));
  };
}