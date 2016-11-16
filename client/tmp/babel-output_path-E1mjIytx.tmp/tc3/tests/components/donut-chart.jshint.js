define('tc3/tests/components/donut-chart.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/donut-chart.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/donut-chart.js should pass jshint.\ncomponents/donut-chart.js: line 8, col 72, Missing semicolon.\ncomponents/donut-chart.js: line 9, col 9, Forgotten \'debugger\' statement?\ncomponents/donut-chart.js: line 59, col 43, Missing semicolon.\n\n3 errors');
  });
});