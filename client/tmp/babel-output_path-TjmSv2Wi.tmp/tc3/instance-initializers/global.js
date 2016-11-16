define('tc3/instance-initializers/global', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(app) {
    // appInstance.inject('route', 'foo', 'service:foo');
    app.store = app.__container__.lookup('service:store');
    window.App = app;
  }

  exports['default'] = {
    name: 'global',
    initialize: initialize
  };
});