import Ember from 'ember';
import moment from 'moment';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

var observer = Ember.observer;

export default BaseHelper.extend({
  globalAllowEmpty: false,

  defaultFormatDidChange: observer('moment.defaultFormat', function () {
    this.recompute();
  }),

  compute: computeFn(function (params, _ref) {
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

    return this.morphMoment(moment.apply(undefined, args), { locale: locale, timeZone: timeZone }).format(format);
  })
});