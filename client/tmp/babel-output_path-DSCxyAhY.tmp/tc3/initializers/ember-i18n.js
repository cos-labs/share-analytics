define("tc3/initializers/ember-i18n", ["exports", "tc3/instance-initializers/ember-i18n"], function (exports, _tc3InstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _tc3InstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _tc3InstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});