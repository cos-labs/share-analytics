import Ember from 'ember';

var observer = Ember.observer;
var inject = Ember.inject;
var Helper = Ember.Helper;
var runBind = Ember.run.bind;

export default Helper.extend({
  moment: inject.service(),
  disableInterval: false,

  localeOrTimeZoneChanged: observer('moment.locale', 'moment.timeZone', function () {
    this.recompute();
  }),

  compute: function compute(value, _ref) {
    var interval = _ref.interval;

    if (this.get('disableInterval')) {
      return;
    }

    this.clearTimer();

    if (interval) {
      this.intervalTimer = setTimeout(runBind(this, this.recompute), parseInt(interval, 10));
    }
  },

  morphMoment: function morphMoment(time, _ref2) {
    var locale = _ref2.locale;
    var timeZone = _ref2.timeZone;

    locale = locale || this.get('moment.locale');

    if (locale) {
      time = time.locale(locale);
    }

    timeZone = timeZone || this.get('moment.timeZone');

    if (timeZone && time.tz) {
      time = time.tz(timeZone);
    }

    return time;
  },

  clearTimer: function clearTimer() {
    clearTimeout(this.intervalTimer);
  },

  destroy: function destroy() {
    this.clearTimer();
    this._super.apply(this, arguments);
  }
});