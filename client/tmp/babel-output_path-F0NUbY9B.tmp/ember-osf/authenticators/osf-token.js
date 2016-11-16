define('ember-osf/authenticators/osf-token', ['exports', 'ember', 'ember-simple-auth/authenticators/base', 'ember-get-config'], function (exports, _ember, _emberSimpleAuthAuthenticatorsBase, _emberGetConfig) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule authenticators
     */

    /**
     * Ember-simple-auth compatible authenticator based on OAuth2 bearer tokens.
     *
     * Intended to be used with the authorizer of the same name.
     *
     * @class OsfTokenAuthenticator
     * @extends ember-simple-auth/BaseAuthenticator
     */
    exports['default'] = _emberSimpleAuthAuthenticatorsBase['default'].extend({
        _test: function _test(accessToken) {
            return _ember['default'].$.ajax({
                method: 'GET',
                url: _emberGetConfig['default'].OSF.apiUrl + '/' + _emberGetConfig['default'].OSF.apiNamespace + '/users/me/',
                dataType: 'json',
                contentType: 'application/json',
                xhrFields: {
                    withCredentials: false
                },
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            }).then(function (res) {
                res.data.attributes.accessToken = accessToken;
                return res.data;
            });
        },
        restore: function restore(data) {
            var accessToken = data.attributes.accessToken;
            return this._test(accessToken).fail(this.invalidate);
        },
        authenticate: function authenticate(accessToken) {
            // Adds the entire API user endpoint record to the session store as given
            var jqDeferred = this._test(accessToken);
            return new _ember['default'].RSVP.Promise(function (resolve, reject) {
                // TODO: Improve param capture
                jqDeferred.done(function (value) {
                    return resolve(value);
                });
                jqDeferred.fail(function (reason) {
                    return reject(reason);
                });
            });
        }
    });
});