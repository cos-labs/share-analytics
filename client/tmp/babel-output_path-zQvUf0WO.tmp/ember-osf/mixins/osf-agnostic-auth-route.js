define('ember-osf/mixins/osf-agnostic-auth-route', ['exports', 'ember', 'ember-get-config', 'ember-osf/mixins/osf-token-login-route', 'ember-osf/mixins/osf-cookie-login-route'], function (exports, _ember, _emberGetConfig, _emberOsfMixinsOsfTokenLoginRoute, _emberOsfMixinsOsfCookieLoginRoute) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule mixins
     */

    var AuthMixin;

    var authType = _emberGetConfig['default'].authorizationType;
    if (authType === 'token') {
        AuthMixin = _emberOsfMixinsOsfTokenLoginRoute['default'];
    } else if (authType === 'cookie') {
        AuthMixin = _emberOsfMixinsOsfCookieLoginRoute['default'];
    } else {
        throw new _ember['default'].Error('Unrecognized authorization type: ' + authType);
    }
    /**
     * Route mixin for authentication-agnostic login: defines the application at runtime to use the authentication method
     *   specified in environment config. Intended to be used in tandem with OsfAgnosticAuthRoute mixin.
     * Some authentication methods (eg cookies) are not available to third-party applications.
     * This has limited use, since most applications will only need to support one method. It may be useful for ember apps
     *   that run inside the OSF, eg to use the standalone dev server, or to offer support for branded apps
     *   on third-party domains.
     *
     * @class OsfAgnosticAuthRoute
     * @extends Ember.Mixin
     * @uses ember-osf/OsfCookieLoginRoute
     * @uses ember-osf/OsfTokenLoginRoute
     */
    exports['default'] = AuthMixin;
});