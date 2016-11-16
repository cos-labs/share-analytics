define('tc3/controllers/application', ['exports', 'ember', 'ember-osf/utils/auth'], function (exports, _ember, _emberOsfUtilsAuth) {
    exports['default'] = _ember['default'].Controller.extend({
        toast: _ember['default'].inject.service(),
        authUrl: (0, _emberOsfUtilsAuth.getAuthUrl)(),
        actions: {
            loginSuccess: function loginSuccess() {
                // this.transitionToRoute('researcher.grant');
            },
            loginFail: function loginFail() /* err */{
                this.get('toast').error('Login failed');
            }
        }
    });
});

//import OsfAgnosticAuthControllerMixin from 'ember-osf/mixins/osf-agnostic-auth-controller';