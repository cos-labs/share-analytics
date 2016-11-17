define('ember-osf/serializers/institution', ['exports', 'ember-osf/serializers/osf-serializer', 'ember-inflector'], function (exports, _emberOsfSerializersOsfSerializer, _emberInflector) {
    'use strict';

    exports['default'] = _emberOsfSerializersOsfSerializer['default'].extend({
        serializeIntoHash: function serializeIntoHash(hash, typeClass, snapshot, options) {
            if (options.forRelationship) {
                hash.data = [{
                    id: snapshot.record.get('id'),
                    type: (0, _emberInflector.pluralize)(typeClass.modelName)
                }];
                return hash;
            }
            return this._super(hash, typeClass, snapshot, options);
        }
    });
});