
export default compileTemplate;
import Ember from "ember";

var SafeString = Ember.Handlebars.SafeString;
var get = Ember.get;
var escapeExpression = Ember.Handlebars.Utils.escapeExpression;
var tripleStache = /\{\{\{\s*(.*?)\s*\}\}\}/g;
var doubleStache = /\{\{\s*(.*?)\s*\}\}/g;

// @public
//
// Compile a translation template.
//
// To override this, define `util:i18n/compile-template` with
// the signature
// `Function(String, Boolean) -> Function(Object) -> String`.

function compileTemplate(template) {
  var rtl = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  return function renderTemplate(data) {
    var result = template.replace(tripleStache, function (i, match) {
      return get(data, match);
    }).replace(doubleStache, function (i, match) {
      return escapeExpression(get(data, match));
    });

    var wrapped = rtl ? "‫" + result + "‬" : result;

    return new SafeString(wrapped);
  };
}