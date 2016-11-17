QUnit.module('JSHint | components/generic-chart.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/generic-chart.js should pass jshint.\ncomponents/generic-chart.js: line 55, col 22, \'columns\' is already defined.\ncomponents/generic-chart.js: line 56, col 22, \'title\' is already defined.\ncomponents/generic-chart.js: line 80, col 22, \'columns\' is already defined.\ncomponents/generic-chart.js: line 81, col 106, Missing semicolon.\ncomponents/generic-chart.js: line 82, col 109, Missing semicolon.\ncomponents/generic-chart.js: line 84, col 22, \'title\' is already defined.\ncomponents/generic-chart.js: line 126, col 44, \'columns\' used out of scope.\ncomponents/generic-chart.js: line 127, col 46, \'title\' used out of scope.\n\n8 errors');
});
