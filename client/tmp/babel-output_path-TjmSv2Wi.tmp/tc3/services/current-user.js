define('tc3/services/current-user', ['exports', 'ember-osf/services/current-user'], function (exports, _emberOsfServicesCurrentUser) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfServicesCurrentUser['default'];
    }
  });
});