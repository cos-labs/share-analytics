define('tc3/adapters/application', ['exports', 'ember', 'ember-data', 'tc3/config/environment'], function (exports, _ember, _emberData, _tc3ConfigEnvironment) {
    exports['default'] = _emberData['default'].RESTAdapter.extend(_emberData['default'].BuildURLMixin, {
        namespace: 'api/v2',
        host: _tc3ConfigEnvironment['default'].apiBaseUrl,
        headers: {
            Accept: 'application/json'
        },
        ajax: function ajax(url, method, hash) {
            hash = hash || {};
            hash.crossDomain = true;
            hash.xhrFields = { withCredentials: true };
            return this._super(url, method, hash);
        },
        pathForType: function pathForType(type) {
            var inflector = new _ember['default'].Inflector(_ember['default'].Inflector.defaultRules);
            return _ember['default'].String.underscore(inflector.pluralize(type));
        }
    });
});