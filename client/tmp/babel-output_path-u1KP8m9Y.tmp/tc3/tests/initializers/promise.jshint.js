define('tc3/tests/initializers/promise.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/promise.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/promise.js should pass jshint.\ninitializers/promise.js: line 1, col 26, Missing semicolon.\ninitializers/promise.js: line 4, col 38, Missing semicolon.\ninitializers/promise.js: line 10, col 2, Missing semicolon.\n\n3 errors');
  });
});