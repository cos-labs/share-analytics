define('tc3/helpers/moment-calendar', ['exports', 'ember', 'tc3/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _tc3ConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_tc3ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});