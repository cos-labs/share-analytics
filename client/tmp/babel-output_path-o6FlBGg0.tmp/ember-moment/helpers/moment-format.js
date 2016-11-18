define('ember-moment/helpers/moment-format', ['exports', 'ember', 'moment', 'ember-moment/utils/helper-compute', 'ember-moment/helpers/-base'], function (exports, _ember, _moment, _emberMomentUtilsHelperCompute, _emberMomentHelpersBase) {
  'use strict';

  var observer = _ember['default'].observer;

  exports['default'] = _emberMomentHelpersBase['default'].extend({
    globalAllowEmpty: false,

    defaultFormatDidChange: observer('moment.defaultFormat', function () {
      this.recompute();
    }),

    compute: (0, _emberMomentUtilsHelperCompute['default'])(function (params, _ref) {
      var locale = _ref.locale;
      var timeZone = _ref.timeZone;

      this._super.apply(this, arguments);
      var length = params.length;

      if (length > 3) {
        throw new TypeError('ember-moment: Invalid Number of arguments, expected at most 4');
      }

      var format = undefined;
      var args = [];

      args.push(params[0]);

      if (length === 1) {
        format = this.get('moment.defaultFormat');
      } else if (length === 2) {
        format = params[1];
      } else if (length > 2) {
        args.push(params[2]);
        format = params[1];
      }

      return this.morphMoment(_moment['default'].apply(undefined, args), { locale: locale, timeZone: timeZone }).format(format);
    })
  });
});