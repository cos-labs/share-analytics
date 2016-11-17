define('ember-i18n/helper', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Helper = null;

  if (_ember['default'].Helper) {
    Helper = _ember['default'].Helper.extend({
      i18n: _ember['default'].inject.service(),

      _locale: _ember['default'].computed.readOnly('i18n.locale'),

      compute: function compute(params, interpolations) {
        var key = params[0];
        var i18n = this.get('i18n');
        return i18n.t(key, interpolations);
      },

      _recomputeOnLocaleChange: _ember['default'].observer('_locale', function () {
        this.recompute();
      })
    });
  }

  exports['default'] = Helper;
});