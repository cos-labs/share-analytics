

export default addTranslations;
import Ember from "ember";

var assign = Ember.assign || Ember.merge;
function addTranslations(locale, newTranslations, owner) {
  var key = "locale:" + locale + "/translations";
  var existingTranslations = owner._lookupFactory(key);

  if (existingTranslations == null) {
    existingTranslations = {};
    owner.register(key, existingTranslations);
  }

  assign(existingTranslations, newTranslations);
}