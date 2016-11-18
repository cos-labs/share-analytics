define('ember-osf/serializers/node-link', ['exports', 'ember-osf/serializers/osf-serializer'], function (exports, _emberOsfSerializersOsfSerializer) {
    'use strict';

    exports['default'] = _emberOsfSerializersOsfSerializer['default'].extend({
        serialize: function serialize(snapshot, options) {
            var serialized = this._super(snapshot, options);
            // APIv2 expects node link information to be nested under relationships.
            serialized.data.relationships = {
                nodes: {
                    data: {
                        id: snapshot.record.target,
                        type: 'nodes'
                    }
                }
            };
            return serialized;
        }
    });
});