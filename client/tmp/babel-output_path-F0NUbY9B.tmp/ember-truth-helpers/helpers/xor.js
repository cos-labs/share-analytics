define('ember-truth-helpers/helpers/xor', ['exports', 'ember-truth-helpers/utils/truth-convert'], function (exports, _emberTruthHelpersUtilsTruthConvert) {
  'use strict';

  exports.xorHelper = xorHelper;

  function xorHelper(params) {
    return (0, _emberTruthHelpersUtilsTruthConvert['default'])(params[0]) !== (0, _emberTruthHelpersUtilsTruthConvert['default'])(params[1]);
  }
});