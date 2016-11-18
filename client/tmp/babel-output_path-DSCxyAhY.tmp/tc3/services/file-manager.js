define('tc3/services/file-manager', ['exports', 'ember-osf/services/file-manager'], function (exports, _emberOsfServicesFileManager) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfServicesFileManager['default'];
    }
  });
});