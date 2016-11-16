define('ember-osf/authorizers/osf-token', ['exports', 'ember-simple-auth/authorizers/base'], function (exports, _emberSimpleAuthAuthorizersBase) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule authorizers
   */

  /**
   * Ember-simple-auth compatible authorizer based on OAuth2 bearer tokens.
   *
   * Intended to be used with the authenticator of the same name.
   *
   * @class OsfTokenAuthorizer
   * @extends ember-simple-auth/BaseAuthorizer
   */
  exports['default'] = _emberSimpleAuthAuthorizersBase['default'].extend({
    authorize: function authorize(sessionData, setHeader) {
      setHeader('Authorization', 'Bearer ' + sessionData.attributes.accessToken);
    }
  });
});