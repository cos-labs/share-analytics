QUnit.module('JSHint | controllers/dashboard.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/dashboard.js should pass jshint.\ncontrollers/dashboard.js: line 46, col 17, \'record\' is defined but never used.\ncontrollers/dashboard.js: line 71, col 28, Missing semicolon.\ncontrollers/dashboard.js: line 85, col 28, \'option\' is defined but never used.\ncontrollers/dashboard.js: line 91, col 40, Missing semicolon.\ncontrollers/dashboard.js: line 92, col 34, Expected an assignment or function call and instead saw an expression.\n\n5 errors');
});
