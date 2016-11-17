define('tc3/tests/models/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/dashboard.js should pass jshint.');
  });
});