define('tc3/helpers/moment-to-now', ['exports', 'ember', 'tc3/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _tc3ConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_tc3ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});