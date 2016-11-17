define('tc3/tests/routes/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dashboard.js should pass jshint.');
  });
});