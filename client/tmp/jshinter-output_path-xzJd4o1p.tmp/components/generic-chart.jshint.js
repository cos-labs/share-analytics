QUnit.module('JSHint | components/generic-chart.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/generic-chart.js should pass jshint.\ncomponents/generic-chart.js: line 26, col 43, \'donut\' is defined but never used.\ncomponents/generic-chart.js: line 49, col 44, \'bar\' is defined but never used.\ncomponents/generic-chart.js: line 90, col 109, Missing semicolon.\ncomponents/generic-chart.js: line 91, col 112, Missing semicolon.\ncomponents/generic-chart.js: line 96, col 51, \'ts\' is defined but never used.\n\n5 errors');
});
