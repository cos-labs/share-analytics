define('ember-osf/authorizers/osf-cookie', ['exports', 'ember-simple-auth/authorizers/base'], function (exports, _emberSimpleAuthAuthorizersBase) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule authorizers
   */

  /**
   * Ember-simple-auth compatible authorizer based on session cookie.
   *
   * Intended to be used with the authenticator of the same name.
   *
   * @class OsfCookieAuthorizer
   * @extends ember-simple-auth/BaseAuthorizer
   */
  exports['default'] = _emberSimpleAuthAuthorizersBase['default'].extend({
    authorize: function authorize() /*data, block*/{
      // Cookies will be sent automatically with requests; no specific actions needed
    }
  });
});