define('tc3/instance-initializers/global.js', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize() /* appInstance */{
    // appInstance.inject('route', 'foo', 'service:foo');
  }

  exports['default'] = {
    name: 'global.js',
    initialize: initialize
  };
});