define('ember-truth-helpers/helpers/lte', ['exports'], function (exports) {
  'use strict';

  exports.lteHelper = lteHelper;

  function lteHelper(params, hash) {
    var left = params[0];
    var right = params[1];
    if (hash.forceNumber) {
      if (typeof left !== 'number') {
        left = Number(left);
      }
      if (typeof right !== 'number') {
        right = Number(right);
      }
    }
    return left <= right;
  }
});