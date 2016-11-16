define('ember-osf/mixins/osf-token-login-controller', ['exports', 'ember', 'ember-osf/utils/auth'], function (exports, _ember, _emberOsfUtilsAuth) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule mixins
     */

    /**
     * Controller mixin to add support for OAuth2 token based authentication
     *
     * Intended to be used in tandem with OsfTokenLoginRouteMixin
     *
     * @class OsfTokenLoginControllerMixin
     * @extends Ember.Mixin
     */
    exports['default'] = _ember['default'].Mixin.create({
        session: _ember['default'].inject.service(),
        actions: {
            login: function login() {
                window.location = (0, _emberOsfUtilsAuth.getAuthUrl)(window.location);
            },
            loginSuccess: function loginSuccess() {},
            loginFail: function loginFail() {}
        }
    });
});