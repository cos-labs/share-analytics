define("tc3/initializers/coordinator-setup", ["exports", "tc3/models/coordinator"], function (exports, _tc3ModelsCoordinator) {
  exports["default"] = {
    name: "setup coordinator",

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register("drag:coordinator", _tc3ModelsCoordinator["default"]);
      app.inject("component", "coordinator", "drag:coordinator");
    }
  };
});