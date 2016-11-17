define('tc3/utils/ajax-helpers', ['exports', 'ember-osf/utils/ajax-helper'], function (exports, _emberOsfUtilsAjaxHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAjaxHelper['default'];
    }
  });
  Object.defineProperty(exports, 'authenticatedAJAX', {
    enumerable: true,
    get: function get() {
      return _emberOsfUtilsAjaxHelper.authenticatedAJAX;
    }
  });
});