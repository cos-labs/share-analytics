define('ember-osf/mixins/cas-authenticated-route', ['exports', 'ember', 'ember-osf/utils/auth'], function (exports, _ember, _emberOsfUtilsAuth) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule mixins
     */

    /**
     * Replacement for Ember-simple-auth AuthenticatedRouteMixin. Instead of redirecting to an internal route,
     *   this mixin redirects to CAS login URL, and brings the user back to the last requested page afterwards
     *
     * For OAuth this is done via the state parameter, and for cookies this is done via the service parameter. (TODO: Need a mixin that detects this!)
     *
     * @class CasAuthenticatedRouteMixin
     */
    exports['default'] = _ember['default'].Mixin.create({
        /**
          The session service.
          @property session
          @readOnly
          @type SessionService
          @public
        */
        session: _ember['default'].inject.service('session'),
        routing: _ember['default'].inject.service('-routing'),

        /**
          Checks whether the session is authenticated, and if it is not, redirects to the login URL. (Sending back to this page after a successful transition)
           __If `beforeModel` is overridden in a route that uses this mixin, the route's
         implementation must call `this._super(...arguments)`__ so that the mixin's
         `beforeModel` method is actually executed.
          @method beforeModel
          @public
        */
        beforeModel: function beforeModel(transition) {
            if (!this.get('session.isAuthenticated')) {
                // Reference: http://stackoverflow.com/a/39054607/414097
                var routing = this.get('routing');
                var params = Object.values(transition.params).filter(function (param) {
                    return Object.values(param).length;
                });
                var url = routing.generateURL(transition.targetName, params, transition.queryParams);
                window.location = (0, _emberOsfUtilsAuth.getAuthUrl)(url);
            } else {
                return this._super.apply(this, arguments);
            }
        }
    });
});