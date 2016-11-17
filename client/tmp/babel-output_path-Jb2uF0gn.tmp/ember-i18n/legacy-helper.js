define("ember-i18n/legacy-helper", ["exports", "ember", "ember-i18n/stream"], function (exports, _ember, _emberI18nStream) {
  "use strict";

  var helper = null;

  if (_ember["default"].Helper == null) {
    // @public
    helper = function tHelper(params, hash, options, env) {
      var i18n = env.data.view.container.lookup('service:i18n');
      var i18nKey = params[0];

      var out = new _emberI18nStream["default"](function () {
        var value = i18nKey.isStream ? i18nKey.value() : i18nKey;
        return value === undefined ? '' : i18n.t(value, (0, _emberI18nStream.readHash)(hash));
      });

      // Once the view is destroyed destroy the steam as well
      env.data.view.one('willDestroyElement', out, function () {
        this.destroy();
      });

      // observe any hash arguments that are streams:
      Object.keys(hash).forEach(function (key) {
        var value = hash[key];

        if (value && value.isStream) {
          value.subscribe(out.notify, out);
        }
      });

      // observe the locale:
      i18n.localeStream.subscribe(out.notify, out);

      // if the i18n key itself is dynamic, observe it:
      if (i18nKey.isStream) {
        i18nKey.subscribe(out.notify, out);
      }

      return out;
    };
  }

  exports["default"] = helper;
});