define('tc3/services/toast', ['exports', 'ember-toastr/services/toast'], function (exports, _emberToastrServicesToast) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberToastrServicesToast['default'];
    }
  });
});