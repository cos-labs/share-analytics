define('tc3/tests/ember-sinon-qunit/test', ['exports', 'ember', 'sinon', 'qunit', 'ember-qunit'], function (exports, _ember, _sinon, _qunit, _emberQunit) {
  exports['default'] = test;

  _sinon['default'].expectation.fail = _sinon['default'].assert.fail = function (msg) {
    _qunit['default'].ok(false, msg);
  };

  _sinon['default'].assert.pass = function (assertion) {
    _qunit['default'].ok(true, assertion);
  };

  _sinon['default'].config = {
    injectIntoThis: false,
    injectInto: null,
    properties: ['spy', 'stub', 'mock', 'sandbox'],
    useFakeTimers: false,
    useFakeServer: false
  };

  function test(testName, callback) {
    function sinonWrapper() {
      var context = this;
      if (_ember['default'].isBlank(context)) {
        context = {};
      }
      _sinon['default'].config.injectInto = context;

      return _sinon['default'].test(callback).apply(context, arguments);
    }

    return (0, _emberQunit.test)(testName, sinonWrapper);
  }
});