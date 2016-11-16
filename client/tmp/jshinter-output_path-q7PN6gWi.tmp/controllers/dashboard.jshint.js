QUnit.module('JSHint | controllers/dashboard.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/dashboard.js should pass jshint.\ncontrollers/dashboard.js: line 44, col 17, \'record\' is defined but never used.\ncontrollers/dashboard.js: line 69, col 28, Missing semicolon.\ncontrollers/dashboard.js: line 80, col 16, Missing semicolon.\ncontrollers/dashboard.js: line 83, col 28, \'option\' is defined but never used.\n\n4 errors');
});
