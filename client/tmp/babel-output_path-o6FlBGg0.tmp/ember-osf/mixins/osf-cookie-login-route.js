define('ember-osf/mixins/osf-cookie-login-route', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @module ember
   * @submodule mixins
   */

  /**
   * Route mixin for login based on OSF cookie authentication. Intended to be used in tandem with OsfCookieLoginController mixin.
   * This auth method is not available to third-party applications.
   *
   * @class OsfCookieLoginRoute
   * @extends Ember.Mixin
   * @uses ember-simple-auth/UnauthenticatedRouteMixin
   */
  exports['default'] = _ember['default'].Mixin.create({
    session: _ember['default'].inject.service(),
    beforeModel: function beforeModel() {
      // Determine whether the user is logged in by making a test request. This is quite a crude way of
      // determining whether the user has a cookie and should be improved in the future.

      // TODO: Should this check for resolution of a promise?
      this._super.apply(this, arguments);

      if (this.get('session.isAuthenticated')) return;

      // Block transition until auth attempt resolves. If auth fails, let the page load normally.
      return this.get('session').authenticate('authenticator:osf-cookie')['catch'](function (err) {
        return console.log('Authentication failed: ', err);
      });
    }
  });
});