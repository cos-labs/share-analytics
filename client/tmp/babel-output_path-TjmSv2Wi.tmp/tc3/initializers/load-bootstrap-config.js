define('tc3/initializers/load-bootstrap-config', ['exports', 'tc3/config/environment', 'ember-bootstrap/config'], function (exports, _tc3ConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_tc3ConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});