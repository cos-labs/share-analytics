define('tc3/tests/routes/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboard.js should pass jshint.\nroutes/dashboard.js: line 10, col 13, \'self\' is defined but never used.\nroutes/dashboard.js: line 4, col 8, \'ENV\' is defined but never used.\n\n2 errors');
  });
});