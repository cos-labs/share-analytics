define('ember-bootstrap/helpers/bs-read-path', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.readPath = readPath;

  function readPath(params /*, hash*/) {
    return _ember['default'].get(params[0], params[1]);
  }

  exports['default'] = _ember['default'].Helper.helper(readPath);
});