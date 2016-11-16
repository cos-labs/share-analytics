define('ember-osf/components/file-widget/component', ['exports', 'ember', 'ember-osf/components/file-widget/template', 'ember-osf/utils/auth', 'ember-osf/utils/load-relationship'], function (exports, _ember, _emberOsfComponentsFileWidgetTemplate, _emberOsfUtilsAuth, _emberOsfUtilsLoadRelationship) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * Widget to quickly upload a file to a selected project
     * ```handlebars
     * {{file-widget
     *   preUpload=(action 'preUpload')
     *   buildUrl=(action 'buildUrl')
     *   listeners=dropzoneOptions
     *   options=dropzoneOptions}}
     * ```
     * @class file-widget
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsFileWidgetTemplate['default'],
        authUrl: (0, _emberOsfUtilsAuth.getAuthUrl)(),
        session: _ember['default'].inject.service(),
        currentUser: _ember['default'].inject.service(),
        fileManager: _ember['default'].inject.service(),
        user: null,
        query: null,
        userNodes: _ember['default'].A(),
        selectedNode: null,
        _url: null,
        init: function init() {
            this._super.apply(this, arguments);
            if (this.get('session.isAuthenticated')) {
                this._setCurrentUser();
            }
        },
        _setCurrentUser: function _setCurrentUser() {
            var _this = this;

            this.get('currentUser').load().then(function (user) {
                return _this.set('user', user);
            });
        },
        onGetCurrentUser: _ember['default'].observer('user', function () {
            var user = this.get('user');
            if (user) {
                (0, _emberOsfUtilsLoadRelationship['default'])(user, 'nodes', this.get('userNodes'));
            } else {
                this.set('userNodes', _ember['default'].A());
            }
        }),
        actions: {
            loginSuccess: function loginSuccess() {
                this._setCurrentUser();
            },
            loginFail: function loginFail() {
                // TODO
            },
            deselectNode: function deselectNode() {
                this.set('selectedNode', null);
            },
            selectNodeFile: function selectNodeFile(file) {
                this.send('selectFile', file.get('links.download'));
            },
            selectNode: function selectNode(node) {
                console.log(node);
            },
            selectFile: function selectFile(url) {
                console.log(url);
            },
            preUpload: function preUpload() {
                return new _ember['default'].RSVP.Promise(function (resolve) {
                    return resolve();
                });
            }
        }
    });
});