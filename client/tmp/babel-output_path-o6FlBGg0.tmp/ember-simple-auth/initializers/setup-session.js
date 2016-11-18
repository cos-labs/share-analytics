define('ember-simple-auth/initializers/setup-session', ['exports', 'ember', 'ember-simple-auth/internal-session', 'ember-simple-auth/session-stores/ephemeral', 'ember-simple-auth/utils/inject'], function (exports, _ember, _emberSimpleAuthInternalSession, _emberSimpleAuthSessionStoresEphemeral, _emberSimpleAuthUtilsInject) {
  'use strict';

  exports['default'] = setupSession;

  function setupSession(registry) {
    registry.register('session:main', _emberSimpleAuthInternalSession['default']);

    var store = 'session-store:application';
    if (_ember['default'].testing) {
      store = 'session-store:test';
      registry.register(store, _emberSimpleAuthSessionStoresEphemeral['default']);
    }
    (0, _emberSimpleAuthUtilsInject['default'])(registry, 'session:main', 'store', store);
  }
});