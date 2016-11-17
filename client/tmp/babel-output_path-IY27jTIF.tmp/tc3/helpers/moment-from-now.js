define('tc3/helpers/moment-from-now', ['exports', 'ember', 'tc3/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _tc3ConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_tc3ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});