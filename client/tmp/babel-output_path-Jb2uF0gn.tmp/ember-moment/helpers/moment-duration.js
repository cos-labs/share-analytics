define('ember-moment/helpers/moment-duration', ['exports', 'moment', 'ember-moment/helpers/-base'], function (exports, _moment, _emberMomentHelpersBase) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports['default'] = _emberMomentHelpersBase['default'].extend({
    disableInterval: true,

    compute: function compute(params, _ref) {
      var locale = _ref.locale;
      var timeZone = _ref.timeZone;

      this._super.apply(this, arguments);

      if (!params || params && params.length > 2) {
        throw new TypeError('ember-moment: Invalid Number of arguments, at most 2');
      }

      return this.morphMoment(_moment['default'].duration.apply(_moment['default'], _toConsumableArray(params)), { locale: locale, timeZone: timeZone }).humanize();
    }
  });
});