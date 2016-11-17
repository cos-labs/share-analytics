define('ember-osf/mixins/file-cache-bypass', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule mixins
     */

    /**
     * This is a hack to resolve a server-side race condition.
     * After creating/modifying/deleting a file through Waterbutler, it can take
     * a fraction of a second for the API's cache to properly update, and
     * trying to reload the file model in that time can return stale data.
     *
     * This adapter mixin appends a nonce to requests that are likely to run into
     * that race condition, forcing a cache miss.
     *
     * @class FileCacheBypassMixin
     * @extends Ember.Mixin
     */
    exports['default'] = _ember['default'].Mixin.create({
        fileManager: _ember['default'].inject.service(),

        // HACK: Messing with Ember Data's privates.
        ajaxOptions: function ajaxOptions() {
            var options = this._super.apply(this, arguments);
            if (this.get('fileManager').isReloadingUrl(options.url)) {
                var prefix = options.url.indexOf('?') === -1 ? '?' : '&';
                var nonce = Date.now();
                // The name of the query parameter doesn't matter, just the nonce
                options.url += prefix + 'cachebypass=' + nonce;
            }
            return options;
        }
    });
});