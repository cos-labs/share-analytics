function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import moment from 'moment';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

export default BaseHelper.extend({
  globalAllowEmpty: false,

  compute: computeFn(function (params, _ref) {
    var hidePrefix = _ref.hidePrefix;
    var locale = _ref.locale;
    var timeZone = _ref.timeZone;

    this._super.apply(this, arguments);

    return this.morphMoment(moment.apply(undefined, _toConsumableArray(params)), { locale: locale, timeZone: timeZone }).toNow(hidePrefix);
  })
});