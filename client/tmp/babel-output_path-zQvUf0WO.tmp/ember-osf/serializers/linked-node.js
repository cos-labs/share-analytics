define('ember-osf/serializers/linked-node', ['exports', 'ember-osf/serializers/osf-serializer'], function (exports, _emberOsfSerializersOsfSerializer) {
    'use strict';

    // TODO Dawn - a linked-node serializer is actually using the node model - Ember doesn't like this.
    // Need to figure out a better place to create the request.
    exports['default'] = _emberOsfSerializersOsfSerializer['default'].extend({
        serializeIntoHash: function serializeIntoHash(hash, typeClass, snapshot, options) {
            if (options.forRelationship) {
                hash.data = [{
                    id: snapshot.record.get('id'),
                    type: 'linked_nodes'
                }];
                return hash;
            }
            return this._super(hash, typeClass, snapshot, options);
        }
    });
});