define('tc3/helpers/moment-format', ['exports', 'ember', 'tc3/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _tc3ConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_tc3ConfigEnvironment['default'], 'moment.allowEmpty')
  });
});