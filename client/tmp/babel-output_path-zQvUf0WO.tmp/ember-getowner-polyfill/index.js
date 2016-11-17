define('ember-getowner-polyfill/index', ['exports', 'ember', 'ember-getowner-polyfill/fake-owner'], function (exports, _ember, _emberGetownerPolyfillFakeOwner) {
  'use strict';

  var hasGetOwner = !!_ember['default'].getOwner;

  exports['default'] = function (object) {
    var owner = undefined;

    if (hasGetOwner) {
      owner = _ember['default'].getOwner(object);
    }

    if (!owner && object.container) {
      owner = new _emberGetownerPolyfillFakeOwner['default'](object);
    }

    return owner;
  };
});