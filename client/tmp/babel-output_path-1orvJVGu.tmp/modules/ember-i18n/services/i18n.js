import Ember from "ember";
import getOwner from 'ember-getowner-polyfill';
import Locale from "../utils/locale";
import _addTranslations from "../utils/add-translations";
import getLocales from "../utils/get-locales";

var assert = Ember.assert;
var computed = Ember.computed;
var get = Ember.get;
var Evented = Ember.Evented;
var makeArray = Ember.makeArray;
var on = Ember.on;
var typeOf = Ember.typeOf;
var warn = Ember.warn;

var Parent = Ember.Service || Ember.Object;

// @public
export default Parent.extend(Evented, {

  // @public
  // The user's locale.
  locale: null,

  // @public
  // A list of found locales.
  locales: computed(getLocales),

  // @public
  //
  // Returns the translation `key` interpolated with `data`
  // in the current `locale`.
  t: function t(key) {
    var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var locale = this.get('_locale');
    assert("I18n: Cannot translate when locale is null", locale);
    var count = get(data, 'count');

    var defaults = makeArray(get(data, 'default'));

    defaults.unshift(key);
    var template = locale.getCompiledTemplate(defaults, count);

    if (template._isMissing) {
      this.trigger('missing', this.get('locale'), key, data);
    }

    return template(data);
  },

  // @public
  exists: function exists(key) {
    var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var locale = this.get('_locale');
    assert("I18n: Cannot check existance when locale is null", locale);
    var count = get(data, 'count');

    var translation = locale.findTranslation(makeArray(key), count);
    return typeOf(translation.result) !== 'undefined';
  },

  // @public
  addTranslations: function addTranslations(locale, translations) {
    _addTranslations(locale, translations, getOwner(this));
    this._addLocale(locale);

    if (this.get('locale').indexOf(locale) === 0) {
      this.get('_locale').rebuild();
    }
  },

  // @private
  _initDefaults: on('init', function () {
    var ENV = getOwner(this)._lookupFactory('config:environment');

    if (this.get('locale') == null) {
      var defaultLocale = (ENV.i18n || {}).defaultLocale;
      if (defaultLocale == null) {
        warn('ember-i18n did not find a default locale; falling back to "en".', false, { id: 'ember-i18n.default-locale' });
        defaultLocale = 'en';
      }
      this.set('locale', defaultLocale);
    }
  }),

  // @private
  //
  // adds a runtime locale to the array of locales on disk
  _addLocale: function _addLocale(locale) {
    this.get('locales').addObject(locale);
  },

  _locale: computed('locale', function () {
    var locale = this.get('locale');
    return locale ? new Locale(this.get('locale'), getOwner(this)) : null;
  })

});