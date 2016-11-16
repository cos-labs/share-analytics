define("ember-i18n/utils/add-translations", ["exports", "ember"], function (exports, _ember) {
  "use strict";

  exports["default"] = addTranslations;

  var assign = _ember["default"].assign || _ember["default"].merge;
  function addTranslations(locale, newTranslations, owner) {
    var key = "locale:" + locale + "/translations";
    var existingTranslations = owner._lookupFactory(key);

    if (existingTranslations == null) {
      existingTranslations = {};
      owner.register(key, existingTranslations);
    }

    assign(existingTranslations, newTranslations);
  }
});