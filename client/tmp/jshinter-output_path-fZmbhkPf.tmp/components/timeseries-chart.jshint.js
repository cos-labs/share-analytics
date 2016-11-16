QUnit.module('JSHint | components/timeseries-chart.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/timeseries-chart.js should pass jshint.\ncomponents/timeseries-chart.js: line 54, col 28, \'interval\' is defined but never used.\n\n1 error');
});
