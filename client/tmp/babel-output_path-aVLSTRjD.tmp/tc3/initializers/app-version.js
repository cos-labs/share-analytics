define('tc3/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tc3/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _tc3ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_tc3ConfigEnvironment['default'].APP.name, _tc3ConfigEnvironment['default'].APP.version)
  };
});