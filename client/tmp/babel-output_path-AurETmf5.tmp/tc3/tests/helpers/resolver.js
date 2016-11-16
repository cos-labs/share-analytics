define('tc3/tests/helpers/resolver', ['exports', 'tc3/resolver', 'tc3/config/environment'], function (exports, _tc3Resolver, _tc3ConfigEnvironment) {

  var resolver = _tc3Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _tc3ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tc3ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});