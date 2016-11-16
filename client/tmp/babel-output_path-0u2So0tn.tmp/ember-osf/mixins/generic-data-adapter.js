define('ember-osf/mixins/generic-data-adapter', ['exports', 'ember', 'ember-simple-auth/mixins/data-adapter-mixin', 'ember-get-config'], function (exports, _ember, _emberSimpleAuthMixinsDataAdapterMixin, _emberGetConfig) {
    'use strict';

    /**
     * Extend the Ember-Simple-Auth adapter to provide cookie support (when necessary).
     * This allows the same addon to define an adapter that works with two authentication types.
     *
     * This particularly applies to local development, as without it cookies are not sent from the ember app to the api domain
     *
     * @class GenericDataADapter
     */
    exports['default'] = _ember['default'].Mixin.create(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
        ajaxOptions: function ajaxOptions() {
            var hash = this._super.apply(this, arguments);

            // TODO: This mechanism is quite ugly, and will require manual ajax requests (such as the file manager) to set fields separately;
            //  getting requests to send cookies without triggering cross-origin rules would be strongly preferable
            if (_emberGetConfig['default'].authorizationType === 'cookie') {
                _ember['default'].$.extend(hash, {
                    xhrFields: {
                        withCredentials: true
                    }
                });
            }
            return hash;
        }
    });
});