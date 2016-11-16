define('tc3/tests/unit/instance-initializers/global.js-test', ['exports', 'ember', 'tc3/instance-initializers/global.js', 'qunit', 'tc3/tests/helpers/destroy-app'], function (exports, _ember, _tc3InstanceInitializersGlobalJs, _qunit, _tc3TestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Instance Initializer | global.js', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.appInstance = _this.application.buildInstance();
      });
    },
    afterEach: function afterEach() {
      _ember['default'].run(this.appInstance, 'destroy');
      (0, _tc3TestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _tc3InstanceInitializersGlobalJs.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});