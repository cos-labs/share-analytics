define('ember-moment/services/moment', ['exports', 'ember', 'moment'], function (exports, _ember, _moment2) {
  'use strict';

  var computed = _ember['default'].computed;
  var logger = _ember['default'].Logger;

  exports['default'] = _ember['default'].Service.extend({
    _timeZone: null,

    locale: null,
    defaultFormat: null,

    init: function init() {
      this._super.apply(this, arguments);

      if (!this.get('defaultFormat')) {
        this.set('defaultFormat', 'LLLL');
      }
    },

    timeZone: computed('_timeZone', {
      get: function get() {
        return this.get('_timeZone');
      },

      set: function set(propertyKey, timeZone) {
        if (!_moment2['default'].tz) {
          logger.warn('[ember-moment] attempted to set timezone, but moment-timezone unavailable.');
          return;
        }

        this.set('_timeZone', timeZone);

        return timeZone;
      }
    }),

    changeLocale: function changeLocale(locale) {
      this.set('locale', locale);
    },

    changeTimeZone: function changeTimeZone(timeZone) {
      this.set('timeZone', timeZone);
    },

    isMoment: function isMoment(obj) {
      return _moment2['default'].isMoment(obj);
    },

    moment: function moment() {
      var time = _moment2['default'].apply(undefined, arguments);
      var locale = this.get('locale');
      var timeZone = this.get('timeZone');

      if (locale) {
        time = time.locale(locale);
      }

      if (timeZone && time.tz) {
        time = time.tz(timeZone);
      }

      return time;
    }
  });
});