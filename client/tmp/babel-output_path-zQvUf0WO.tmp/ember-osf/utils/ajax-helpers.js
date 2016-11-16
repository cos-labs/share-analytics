define('ember-osf/utils/ajax-helpers', ['exports', 'ember', 'ember-get-config'], function (exports, _ember, _emberGetConfig) {
    'use strict';

    /**
     * Helper functions for asynchronous behavior
     *
     * @module ember-osf
     * @module utils
     */

    /**
     * Helper functions to support AJAX requests
     * @class ajax-helpers
     */

    /**
     * Performs an AJAX request with any additional authorization config as needed for the configured authorization type.
     * Allows manual AJAX requests to be authorization-agnostic when using this addon.
     *
     * Primarily used to set XHR flags on manual AJAX requests, for cookie based authorization.
     * @method authenticatedAJAX
     * @param {Object} options
     * @return {Promise}
     */
    function authenticatedAJAX(options) {
        if (_emberGetConfig['default'].authorizationType === 'cookie') {
            _ember['default'].merge(options, {
                xhrFields: {
                    withCredentials: true
                }
            });
        }
        return _ember['default'].$.ajax(options);
    }
    exports.authenticatedAJAX = authenticatedAJAX;
});