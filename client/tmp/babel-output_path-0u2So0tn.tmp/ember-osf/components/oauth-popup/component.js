define('ember-osf/components/oauth-popup/component', ['exports', 'ember', 'ember-osf/components/oauth-popup/template', 'ember-osf/utils/auth'], function (exports, _ember, _emberOsfComponentsOauthPopupTemplate, _emberOsfUtilsAuth) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * Log a user in via OAuth2 in a popup window, without requiring a redirect
     *
     * Sample usage:
     * ```handlebars
     * {{#oauth-popup
     *   authUrl=authUrl
     *   loginSuccess=(action 'loginSuccess')
     *   loginFail=(action 'loginFail') as |popup|}}
     *    <button class="btn btn-default login-button" onclick={{action 'login' target=popup}} >
     *       Login to OSF
     *    </button>
     * {{/oauth-popup}}
     * ```
     * @class oauth-popup
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsOauthPopupTemplate['default'],
        tagName: '',
        session: _ember['default'].inject.service(),
        popupHeight: 550,
        popupWidth: 500,
        authUrl: null,
        popup: null,
        redirectRoute: null,
        _openPopup: function _openPopup() {
            var _this = this;

            var _getProperties = this.getProperties('popupWidth', 'popupHeight', 'popup');

            var popupHeight = _getProperties.popupHeight;
            var popupWidth = _getProperties.popupWidth;
            var popup = _getProperties.popup;

            if (popup) {
                popup.close();
            }
            var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

            var left = width / 2 - popupWidth / 2;
            var top = height / 2;
            this.set('popup', window.open(this.get('authUrl'), 'Authentication', 'resizeable=true, width=' + popupWidth + ', height=' + popupHeight + ', top=' + top + ', left=' + left));
            // Puts focus on the new window
            if (window.focus) {
                this.popup.focus();
            }

            // wait for the popup window to be closed, by the user or completion of authorization redirect.
            return new _ember['default'].RSVP.Promise(function (resolve /* , reject */) {
                var timer = window.setInterval(function () {
                    popup = _this.get('popup');
                    if (!popup || popup.location.origin === window.location.origin) {
                        var accessToken = (0, _emberOsfUtilsAuth.getTokenFromHash)(popup.location.hash);
                        popup.close();
                        window.clearInterval(timer);
                        resolve(accessToken);
                    }
                }, 100);
            });
        },
        actions: {
            login: function login() {
                var _this2 = this;

                this._openPopup().then(function (accessToken) {
                    return _this2.get('session').authenticate('authenticator:osf-token', accessToken).then(function () {
                        return _this2.sendAction('loginSuccess');
                    }, function (err) {
                        return _this2.sendAction('loginFail', err);
                    });
                });
            }
        }
    });
});