import Ember from 'ember';
import layout from './template';

import { getAuthUrl } from 'ember-osf/utils/auth';

import loadAll from 'ember-osf/utils/load-relationship';

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
export default Ember.Component.extend({
    layout: layout,
    authUrl: getAuthUrl(),
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    fileManager: Ember.inject.service(),
    user: null,
    query: null,
    userNodes: Ember.A(),
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
    onGetCurrentUser: Ember.observer('user', function () {
        var user = this.get('user');
        if (user) {
            loadAll(user, 'nodes', this.get('userNodes'));
        } else {
            this.set('userNodes', Ember.A());
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
            return new Ember.RSVP.Promise(function (resolve) {
                return resolve();
            });
        }
    }
});