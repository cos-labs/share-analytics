QUnit.module('JSHint | components/place-holder.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/place-holder.js should pass jshint.\ncomponents/place-holder.js: line 88, col 11, Missing semicolon.\ncomponents/place-holder.js: line 132, col 61, Missing semicolon.\n\n2 errors');
});
