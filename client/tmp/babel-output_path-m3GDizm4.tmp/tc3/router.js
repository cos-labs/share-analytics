define('tc3/router', ['exports', 'ember', 'tc3/config/environment'], function (exports, _ember, _tc3ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _tc3ConfigEnvironment['default'].locationType,
    rootURL: _tc3ConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('dashboard');
    this.route('gridtest');
  });

  exports['default'] = Router;
});