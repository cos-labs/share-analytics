define('ember-moment/helpers/now', ['exports', 'ember-moment/helpers/-base'], function (exports, _emberMomentHelpersBase) {
  'use strict';

  exports['default'] = _emberMomentHelpersBase['default'].extend({
    compute: function compute() {
      this._super.apply(this, arguments);

      return new Date();
    }
  });
});