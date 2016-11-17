define('ember-osf/adapters/collection', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _emberOsfAdaptersOsfAdapter) {
    'use strict';

    exports['default'] = _emberOsfAdaptersOsfAdapter['default'].extend({
        buildURL: function buildURL(_, __, ___, requestType) {
            // Embed linked_nodes
            var base = this._super.apply(this, arguments);
            if (['createRecord', 'updateRecord', 'deleteRecord'].indexOf(requestType) === -1) {
                return base + '?embed=linked_nodes';
            } else {
                return base;
            }
        }
    });
});