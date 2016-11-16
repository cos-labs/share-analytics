import Ember from 'ember';
import BaseStore from './base';
import objectsAreEqual from '../utils/objects-are-equal';

var RSVP = Ember.RSVP;
var computed = Ember.computed;
var next = Ember.run.next;

/**
  Session store that persists data in a cookie.

  By default the cookie session store uses a session cookie that expires and is
  deleted when the browser is closed. The cookie expiration period can be
  configured by setting the
  {{#crossLink "CookieStore/cookieExpirationTime:property"}}{{/crossLink}}
  property. This can be used to implement "remember me" functionality that will
  either store the session persistently or in a session cookie depending on
  whether the user opted in or not:

  ```js
  // app/controllers/login.js
  export default Ember.Controller.extend({
    rememberMe: false,

    _rememberMeChanged: Ember.observer('rememberMe', function() {
      const expirationTime = this.get('rememberMe') ? (14 * 24 * 60 * 60) : null;
      this.set('session.store.cookieExpirationTime', expirationTime);
    }
  });
  ```

  __In order to keep multiple tabs/windows of an application in sync, this
  store has to periodically (every 500ms) check the cookie for changes__ as
  there are no events for cookie changes that the store could subscribe to. If
  the application does not need to make sure all session data is deleted when
  the browser is closed, the
  {{#crossLink "LocalStorageStore"}}`localStorage` session store{{/crossLink}}
  should be used.

  @class CookieStore
  @module ember-simple-auth/session-stores/cookie
  @extends BaseStore
  @public
*/
export default BaseStore.extend({
  /**
    The domain to use for the cookie, e.g., "example.com", ".example.com"
    (which includes all subdomains) or "subdomain.example.com". If not
    explicitly set, the cookie domain defaults to the domain the session was
    authneticated on.
     @property cookieDomain
    @type String
    @default null
    @public
  */
  cookieDomain: null,

  /**
    The name of the cookie.
     @property cookieName
    @type String
    @default ember_simple_auth:session
    @public
  */
  cookieName: 'ember_simple_auth:session',

  /**
    The expiration time for the cookie in seconds. A value of `null` will make
    the cookie a session cookie that expires and gets deleted when the browser
    is closed.
     @property cookieExpirationTime
    @default null
    @type Integer
    @public
  */
  cookieExpirationTime: null,

  _secureCookies: window.location.protocol === 'https:',

  _syncDataTimeout: null,

  _renewExpirationTimeout: null,

  _isPageVisible: computed(function () {
    var visibilityState = document.visibilityState || 'visible';
    return visibilityState === 'visible';
  }).volatile(),

  init: function init() {
    var _this = this;

    this._super.apply(this, arguments);

    next(function () {
      _this._syncData().then(function () {
        _this._renewExpiration();
      });
    });
  },

  /**
    Persists the `data` in the cookie.
     @method persist
    @param {Object} data The data to persist
    @return {Ember.RSVP.Promise} A promise that resolves when the data has successfully been persisted and rejects otherwise.
    @public
  */
  persist: function persist(data) {
    this._lastData = data;
    data = JSON.stringify(data || {});
    var expiration = this._calculateExpirationTime();
    this._write(data, expiration);
    return RSVP.resolve();
  },

  /**
    Returns all data currently stored in the cookie as a plain object.
     @method restore
    @return {Ember.RSVP.Promise} A promise that resolves with the data currently persisted in the store when the data has been restored successfully and rejects otherwise.
    @public
  */
  restore: function restore() {
    var data = this._read(this.cookieName);
    if (Ember.isEmpty(data)) {
      return RSVP.resolve({});
    } else {
      return RSVP.resolve(JSON.parse(data));
    }
  },

  /**
    Clears the store by deleting the cookie.
     @method clear
    @return {Ember.RSVP.Promise} A promise that resolves when the store has been cleared successfully and rejects otherwise.
    @public
  */
  clear: function clear() {
    this._write(null, 0);
    this._lastData = {};
    return RSVP.resolve();
  },

  _read: function _read(name) {
    var value = document.cookie.match(new RegExp(name + '=([^;]+)')) || [];
    return decodeURIComponent(value[1] || '');
  },

  _calculateExpirationTime: function _calculateExpirationTime() {
    var cachedExpirationTime = this._read(this.cookieName + ':expiration_time');
    cachedExpirationTime = !!cachedExpirationTime ? new Date().getTime() + cachedExpirationTime * 1000 : null;
    return !!this.cookieExpirationTime ? new Date().getTime() + this.cookieExpirationTime * 1000 : cachedExpirationTime;
  },

  _write: function _write(value, expiration) {
    var path = '; path=/';
    var domain = Ember.isEmpty(this.cookieDomain) ? '' : '; domain=' + this.cookieDomain;
    var expires = Ember.isEmpty(expiration) ? '' : '; expires=' + new Date(expiration).toUTCString();
    var secure = !!this._secureCookies ? ';secure' : '';
    document.cookie = this.cookieName + '=' + encodeURIComponent(value) + domain + path + expires + secure;
    if (expiration !== null) {
      var cachedExpirationTime = this._read(this.cookieName + ':expiration_time');
      document.cookie = this.cookieName + ':expiration_time=' + encodeURIComponent(this.cookieExpirationTime || cachedExpirationTime) + domain + path + expires + secure;
    }
  },

  _syncData: function _syncData() {
    var _this2 = this;

    return this.restore().then(function (data) {
      if (!objectsAreEqual(data, _this2._lastData)) {
        _this2._lastData = data;
        _this2.trigger('sessionDataUpdated', data);
      }
      if (!Ember.testing) {
        Ember.run.cancel(_this2._syncDataTimeout);
        _this2._syncDataTimeout = Ember.run.later(_this2, _this2._syncData, 500);
      }
    });
  },

  _renew: function _renew() {
    var _this3 = this;

    return this.restore().then(function (data) {
      if (!Ember.isEmpty(data) && data !== {}) {
        data = Ember.typeOf(data) === 'string' ? data : JSON.stringify(data || {});
        var expiration = _this3._calculateExpirationTime();
        _this3._write(data, expiration);
      }
    });
  },

  _renewExpiration: function _renewExpiration() {
    if (!Ember.testing) {
      Ember.run.cancel(this._renewExpirationTimeout);
      this._renewExpirationTimeout = Ember.run.later(this, this._renewExpiration, 60000);
    }
    if (this.get('_isPageVisible')) {
      return this._renew();
    } else {
      return RSVP.resolve();
    }
  }
});