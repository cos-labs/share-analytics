function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import moment from 'moment';

import computedFactory from './-base';

export default computedFactory(function fromNowComputed(params) {
  var maybeHideSuffix = undefined;

  if (params.length > 1) {
    maybeHideSuffix = params.pop();
  }

  return moment.apply(undefined, _toConsumableArray(params)).fromNow(maybeHideSuffix);
});