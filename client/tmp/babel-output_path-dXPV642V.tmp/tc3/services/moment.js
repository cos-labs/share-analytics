define('tc3/services/moment', ['exports', 'ember', 'tc3/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _tc3ConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_tc3ConfigEnvironment['default'], 'moment.outputFormat')
  });
});