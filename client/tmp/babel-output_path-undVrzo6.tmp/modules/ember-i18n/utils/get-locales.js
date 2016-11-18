

export default getLocales;
import Ember from 'ember';

var matchKey = '/locales/(.+)/translations$';
function getLocales() {
  return Object.keys(requirejs.entries).reduce(function (locales, module) {
    var match = module.match(matchKey);
    if (match) {
      locales.pushObject(match[1]);
    }
    return locales;
  }, Ember.A()).sort();
}