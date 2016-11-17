QUnit.module('JSHint | controllers/application.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 3, col 8, \'OsfAgnosticAuthControllerMixin\' is defined but never used.\n\n1 error');
});
