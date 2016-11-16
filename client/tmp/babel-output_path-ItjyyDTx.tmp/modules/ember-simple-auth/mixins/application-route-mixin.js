var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

import Ember from 'ember';
import Configuration from './../configuration';

var inject = Ember.inject;

/**
  The mixin for the application route; __defines methods that are called when
  the session was successfully authenticated (see
  {{#crossLink "SessionService/authenticationSucceeded:event"}}{{/crossLink}})
  or invalidated__ (see
  {{#crossLink "SessionService/invalidationSucceeded:event"}}{{/crossLink}}).

  __Using this mixin is optional.__ The session events can also be handled
  manually, e.g. in an instance initializer:

  ```js
  // app/instance-initializers/session-events.js
  export function initialize(instance) {
    const applicationRoute = instance.container.lookup('route:application');
    const session          = instance.container.lookup('service:session');
    session.on('authenticationSucceeded', function() {
      applicationRoute.transitionTo('index');
    });
    session.on('invalidationSucceeded', function() {
      window.location.reload();
    });
  };

  export default {
    initialize,
    name:  'session-events',
    after: 'ember-simple-auth'
  };
  ```

  __When using the `ApplicationRouteMixin` you need to specify
  `needs: ['service:session']` in the application route's unit test.__

  @class ApplicationRouteMixin
  @module ember-simple-auth/mixins/application-route-mixin
  @extends Ember.Mixin
  @public
*/
export default Ember.Mixin.create({
  /**
    The session service.
     @property session
    @readOnly
    @type SessionService
    @public
  */
  session: inject.service('session'),

  init: function init() {
    this._super.apply(this, arguments);
    this._subscribeToSessionEvents();
  },

  _subscribeToSessionEvents: function _subscribeToSessionEvents() {
    var _this = this,
        _arguments = arguments;

    Ember.A([['authenticationSucceeded', 'sessionAuthenticated'], ['invalidationSucceeded', 'sessionInvalidated']]).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var event = _ref2[0];
      var method = _ref2[1];

      _this.get('session').on(event, Ember.run.bind(_this, function () {
        _this[method].apply(_this, _arguments);
      }));
    });
  },

  /**
    This method handles the session's
    {{#crossLink "SessionService/authenticationSucceeded:event"}}{{/crossLink}}
    event. If there is a transition that was previously intercepted by
    {{#crossLink "AuthenticatedRouteMixin/beforeModel:method"}}the
    AuthenticatedRouteMixin's `beforeModel` method{{/crossLink}} it will retry
    it. If there is no such transition, this action transitions to the
    {{#crossLink "Configuration/routeAfterAuthentication:property"}}{{/crossLink}}.
     @method sessionAuthenticated
    @public
  */
  sessionAuthenticated: function sessionAuthenticated() {
    var attemptedTransition = this.get('session.attemptedTransition');

    if (attemptedTransition) {
      attemptedTransition.retry();
      this.set('session.attemptedTransition', null);
    } else {
      this.transitionTo(Configuration.routeAfterAuthentication);
    }
  },

  /**
    This method handles the session's
    {{#crossLink "SessionService/invalidationSucceeded:event"}}{{/crossLink}}
    event. __It reloads the Ember.js application__ by redirecting the browser
    to the application's root URL so that all in-memory data (such as Ember
    Data stores etc.) gets cleared.
     If the Ember.js application will be used in an environment where the users
    don't have direct access to any data stored on the client (e.g.
    [cordova](http://cordova.apache.org)) this action can be overridden to e.g.
    simply transition to the index route.
     @method sessionInvalidated
    @public
  */
  sessionInvalidated: function sessionInvalidated() {
    if (!Ember.testing) {
      window.location.replace(Configuration.baseURL);
    }
  }
});