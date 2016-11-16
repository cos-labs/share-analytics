define('tc3/tests/components/bar-chart.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/bar-chart.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bar-chart.js should pass jshint.');
  });
});