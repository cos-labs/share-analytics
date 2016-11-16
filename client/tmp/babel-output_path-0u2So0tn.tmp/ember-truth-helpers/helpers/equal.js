define("ember-truth-helpers/helpers/equal", ["exports"], function (exports) {
  "use strict";

  exports.equalHelper = equalHelper;

  function equalHelper(params) {
    return params[0] === params[1];
  }
});