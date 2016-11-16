define('ember-osf/mixins/osf-cookie-login-controller', ['exports', 'ember', 'ember-osf/utils/auth'], function (exports, _ember, _emberOsfUtilsAuth) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule mixins
     */

    /**
     * Controller mixin for login based on OSF cookie authentication. Intended to be used in tandem with OsfCookieLoginRoute mixin.
     * This auth method is not available to third-party applications.
     *
     * @class OsfCookieLoginController
     * @extends Ember.Mixin
     */
    exports['default'] = _ember['default'].Mixin.create({
        session: _ember['default'].inject.service('session'),

        queryParams: ['ticket'],
        ticket: null,

        actions: {
            login: function login() {
                window.location = (0, _emberOsfUtilsAuth.getAuthUrl)(window.location);
            },
            loginSuccess: function loginSuccess() {},
            loginFail: function loginFail() {}
        }
    });
});