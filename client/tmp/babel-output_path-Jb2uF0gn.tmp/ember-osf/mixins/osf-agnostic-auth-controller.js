define('ember-osf/mixins/osf-agnostic-auth-controller', ['exports', 'ember', 'ember-get-config', 'ember-osf/mixins/osf-token-login-controller', 'ember-osf/mixins/osf-cookie-login-controller'], function (exports, _ember, _emberGetConfig, _emberOsfMixinsOsfTokenLoginController, _emberOsfMixinsOsfCookieLoginController) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule mixins
     */
    var AuthMixin;

    var authType = _emberGetConfig['default'].authorizationType;
    if (authType === 'token') {
        AuthMixin = _emberOsfMixinsOsfTokenLoginController['default'];
    } else if (authType === 'cookie') {
        AuthMixin = _emberOsfMixinsOsfCookieLoginController['default'];
    } else {
        throw new _ember['default'].Error('Unrecognized authorization type: ' + authType);
    }
    /**
     * Controller mixin for authentication-agnostic login: defines the application at runtime to use the authentication method
     *   specified in environment config. Intended to be used in tandem with OsfAuthController mixin.
     * Some authentication methods (eg cookies) are not available to third-party applications.
     * This has limited use, since most applications will only need to support one method. It may be useful for ember apps
     *   that run inside the OSF, eg to use the standalone dev server, or to offer support for branded apps
     *   on third-party domains.
     *
     * @class OsfAgnosticAuthController
     * @extends Ember.Mixin
     * @uses ember-osf/OsfCookieLoginController
     * @uses ember-osf/OsfTokenLoginController
     */
    exports['default'] = AuthMixin;
});