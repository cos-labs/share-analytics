define('tc3/app', ['exports', 'ember', 'tc3/resolver', 'ember-load-initializers', 'tc3/config/environment'], function (exports, _ember, _tc3Resolver, _emberLoadInitializers, _tc3ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _tc3ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tc3ConfigEnvironment['default'].podModulePrefix,
    Resolver: _tc3Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _tc3ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});