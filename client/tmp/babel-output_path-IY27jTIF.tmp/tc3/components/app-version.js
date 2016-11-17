define('tc3/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'tc3/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _tc3ConfigEnvironment) {

  var name = _tc3ConfigEnvironment['default'].APP.name;
  var version = _tc3ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});