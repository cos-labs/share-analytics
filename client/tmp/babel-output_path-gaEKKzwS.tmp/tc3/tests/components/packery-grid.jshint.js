define('tc3/tests/components/packery-grid.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/packery-grid.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/packery-grid.js should pass jshint.\ncomponents/packery-grid.js: line 20, col 31, \'Draggabilly\' is not defined.\n\n1 error');
  });
});