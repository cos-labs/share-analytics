define('tc3/tests/components/place-holder.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/place-holder.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/place-holder.js should pass jshint.\ncomponents/place-holder.js: line 56, col 28, Expected \'}\' to match \'{\' from line 4 and instead saw \'function\'.\ncomponents/place-holder.js: line 56, col 36, Bad invocation.\ncomponents/place-holder.js: line 56, col 39, Expected \')\' and instead saw \'{\'.\ncomponents/place-holder.js: line 56, col 40, Missing semicolon.\ncomponents/place-holder.js: line 61, col 25, Missing semicolon.\ncomponents/place-holder.js: line 121, col 46, Unrecoverable syntax error. (74% scanned).\n\n6 errors');
  });
});