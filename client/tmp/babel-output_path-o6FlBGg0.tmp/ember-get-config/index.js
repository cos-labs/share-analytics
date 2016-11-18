define("ember-get-config/index", ["exports"], function (exports) {
  "use strict";

  var configName = Object.keys(window.requirejs.entries).filter(function (entry) {
    return entry.match(/\/config\/environment/);
  })[0];

  exports["default"] = window.requirejs(configName)["default"];
});