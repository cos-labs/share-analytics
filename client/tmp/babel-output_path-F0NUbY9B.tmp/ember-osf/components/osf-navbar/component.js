define('ember-osf/components/osf-navbar/component', ['exports', 'ember', 'ember-osf/components/osf-navbar/template', 'ember-get-config'], function (exports, _ember, _emberOsfComponentsOsfNavbarTemplate, _emberGetConfig) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * Display the OSF navbar
     *
     * Sample usage:
     * ```handlebars
     * {{osf-navbar
     *   loginAction=loginAction
     *   hideSearch=true}}
     * ```
     *
     * @class osf-navbar
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsOsfNavbarTemplate['default'],
        session: _ember['default'].inject.service(),
        currentUser: _ember['default'].inject.service(),
        onSearchPage: false,
        /**
         * Whether search icons and functionality show up
         * @property hideSearch
         * @type {Boolean}
         */
        hideSearch: false,

        /**
         * The URL to use for signup. May be overridden, eg for special campaign pages
         *
         * @property signupUrl
         * @type {String}
         */
        signupUrl: _emberGetConfig['default'].OSF.url + 'register',

        gravatarUrl: _ember['default'].computed('user', function () {
            var imgLink = this.get('user.links.profile_image');
            if (imgLink) {
                imgLink += '&s=25';
            }
            return imgLink;
        }),
        fullName: null,
        host: _emberGetConfig['default'].OSF.url,
        user: null,
        showSearch: false,
        _loadCurrentUser: function _loadCurrentUser() {
            var _this = this;

            this.get('currentUser').load().then(function (user) {
                return _this.set('user', user);
            });
        },
        init: function init() {
            this._super.apply(this, arguments);
            // TODO: React to changes in service/ event?
            if (this.get('session.isAuthenticated')) {
                this._loadCurrentUser();
            }
        },
        // TODO: These parameters are defined in osf settings.py; make sure ember config matches.
        allowLogin: true,
        enableInstitutions: true,
        actions: {
            toggleSearch: function toggleSearch() {
                this.toggleProperty('showSearch');
            },
            logout: function logout() {
                // TODO: May not work well if logging out from page that requires login- check?
                this.get('session').invalidate();
            }
        }
    });
});