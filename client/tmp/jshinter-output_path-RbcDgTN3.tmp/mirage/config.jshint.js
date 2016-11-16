QUnit.module('JSHint | mirage/config.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'mirage/config.js should pass jshint.\nmirage/config.js: line 1, col 8, \'ENV\' is defined but never used.\n\n1 error');
});
