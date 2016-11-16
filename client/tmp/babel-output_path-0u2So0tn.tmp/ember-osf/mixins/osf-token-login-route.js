define('ember-osf/mixins/osf-token-login-route', ['exports', 'ember', 'ember-get-config', 'ember-osf/utils/auth'], function (exports, _ember, _emberGetConfig, _emberOsfUtilsAuth) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule mixins
     */

    /**
     * Route mixin to add support for OAuth2 token based authentication
     *
     * Intended to be used in tandem with OsfTokenLoginControllerMixin
     *
     * @class OsfTokenLoginRouteMixin
     * @extends Ember.Mixin
     */
    exports['default'] = _ember['default'].Mixin.create({
        session: _ember['default'].inject.service(),
        beforeModel: function beforeModel() {
            // TODO: Should this check for resolution of a promise?
            this._super.apply(this, arguments);

            var accessToken;
            if (_emberGetConfig['default'].OSF.isLocal) {
                accessToken = _emberGetConfig['default'].OSF.accessToken;
            } else {
                accessToken = (0, _emberOsfUtilsAuth.getTokenFromHash)(window.location.hash);
                if (!accessToken) {
                    return null;
                }
                window.location.hash = '';
            }

            return this.get('session').authenticate('authenticator:osf-token', accessToken)['catch'](function (err) {
                return console.log('Authentication failed: ', err);
            });
        }
    });
});