define('tc3/tests/controllers/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dashboard.js should pass jshint.\ncontrollers/dashboard.js: line 44, col 17, \'record\' is defined but never used.\ncontrollers/dashboard.js: line 69, col 28, Missing semicolon.\ncontrollers/dashboard.js: line 79, col 108, \'enumerable\' is defined but never used.\ncontrollers/dashboard.js: line 79, col 101, \'index\' is defined but never used.\ncontrollers/dashboard.js: line 85, col 108, \'enumerable\' is defined but never used.\ncontrollers/dashboard.js: line 85, col 101, \'index\' is defined but never used.\ncontrollers/dashboard.js: line 91, col 108, \'enumerable\' is defined but never used.\ncontrollers/dashboard.js: line 91, col 101, \'index\' is defined but never used.\ncontrollers/dashboard.js: line 99, col 28, \'option\' is defined but never used.\n\n9 errors');
  });
});