QUnit.module('JSHint | components/timeseries-chart.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/timeseries-chart.js should pass jshint.\ncomponents/timeseries-chart.js: line 17, col 73, Missing semicolon.\ncomponents/timeseries-chart.js: line 18, col 76, Missing semicolon.\ncomponents/timeseries-chart.js: line 19, col 10, Missing semicolon.\ncomponents/timeseries-chart.js: line 64, col 28, \'interval\' is defined but never used.\n\n4 errors');
});
