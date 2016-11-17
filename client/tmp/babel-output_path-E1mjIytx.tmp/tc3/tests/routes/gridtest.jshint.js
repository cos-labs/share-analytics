define('tc3/tests/routes/gridtest.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/gridtest.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gridtest.js should pass jshint.');
  });
});