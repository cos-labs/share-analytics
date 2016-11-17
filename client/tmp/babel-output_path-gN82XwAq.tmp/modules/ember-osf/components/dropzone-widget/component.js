import Ember from 'ember';
import config from 'ember-get-config';

import layout from './template';

/**
 * @module ember-osf
 * @submodule components
 */

/**
 * Support file uploads via dropzone.
 * Accepts dropzone event listeners as parameters (e.g. success, error, addedfile)
 *
 * Sample usage:
 * ```handlebars
 * {{dropzone-widget
 *   preUpload=attrs.preUpload
 *   buildUrl=buildUrl
 *   success=attrs.success
 *   defaultMessage=defaultMessage
 *   options=dropzoneOptions}}
 * ```
 *
 * @class dropzone-widget
 */
export default Ember.Component.extend({
    layout: layout,
    session: Ember.inject.service(),
    classNames: ['dropzone'],
    didInsertElement: function didInsertElement() {
        var _this = this;

        var preUpload = this.get('preUpload');
        var dropzoneOptions = this.get('options') || {};

        if (!this.get('buildUrl') && !preUpload && !dropzoneOptions.url) {
            console.error('Need to define url somewhere');
        }
        var drop = new Dropzone('#' + this.elementId, { // jshint ignore:line
            url: function url(file) {
                return typeof _this.get('buildUrl') === 'function' ? _this.get('buildUrl')(file) : _this.get('buildUrl');
            },
            autoProcessQueue: false,
            dictDefaultMessage: this.get('defaultMessage') || 'Drop files here to upload'
        });

        // Set osf session header
        var headers = {};

        var authType = config['ember-simple-auth'].authorizer;
        this.get('session').authorize(authType, function (headerName, content) {
            headers[headerName] = content;
        });
        dropzoneOptions.headers = headers;
        dropzoneOptions.withCredentials = config.authorizationType === 'cookie';

        // Attach preUpload to addedfile event
        drop.on('addedfile', function (file) {
            if (preUpload) {
                preUpload(_this, drop, file).then(function () {
                    return drop.processFile(file);
                });
            } else {
                drop.processFile(file);
            }
        });

        // Set dropzone options
        drop.options = Ember.merge(drop.options, dropzoneOptions);

        // Attach dropzone event listeners: http://www.dropzonejs.com/#events
        drop.events.forEach(function (event) {
            if (typeof _this.get(event) === 'function') {
                drop.on(event, function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return _this.get(event).apply(undefined, [_this, drop].concat(args));
                });
            }
        });
    }
});