define('tc3/initializers/promise', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    window.Promise = _ember['default'].RSVP.Promise;
  }

  exports['default'] = {
    name: 'promise',
    initialize: initialize
  };
});