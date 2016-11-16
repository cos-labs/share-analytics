define('ember-bootstrap/helpers/bs-not', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.not = not;

  function not(params /*, hash*/) {
    return !params[0];
  }

  exports['default'] = _ember['default'].Helper.helper(not);
});