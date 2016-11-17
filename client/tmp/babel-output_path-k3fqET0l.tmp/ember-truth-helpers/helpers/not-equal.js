define("ember-truth-helpers/helpers/not-equal", ["exports"], function (exports) {
  "use strict";

  exports.notEqualHelper = notEqualHelper;

  function notEqualHelper(params) {
    return params[0] !== params[1];
  }
});