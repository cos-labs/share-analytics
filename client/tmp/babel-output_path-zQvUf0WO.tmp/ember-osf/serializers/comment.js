define('ember-osf/serializers/comment', ['exports', 'ember', 'ember-osf/serializers/osf-serializer'], function (exports, _ember, _emberOsfSerializersOsfSerializer) {
    'use strict';

    exports['default'] = _emberOsfSerializersOsfSerializer['default'].extend({
        serialize: function serialize(snapshot, options) {
            // jshint ignore:line
            // Add relationships field to identify comment target
            var serialized = this._super.apply(this, arguments);

            // For POST requests specifically, two additional fields are needed
            var targetID = snapshot.record.get('targetID');
            var targetType = snapshot.record.get('targetType');
            // TODO: Find a better way to detect request type, so this can enforce fields that are needed for creation (but not for editing)
            //Ember.assert('Must provide target ID', targetID);
            //Ember.assert('Must provide target type', targetType);

            if (targetID && targetType) {
                serialized.data.relationships = {
                    target: {
                        data: {
                            id: targetID,
                            type: targetType
                        }
                    }
                };
            }
            return serialized;
        },
        extractRelationships: function extractRelationships(modelClass, resourceHash) {
            // TODO: remove when https://openscience.atlassian.net/browse/OSF-6646 is done
            resourceHash = this._super(modelClass, resourceHash);
            resourceHash.replies.links.related = _ember['default'].copy(resourceHash.replies.links.self);
            return resourceHash;
        }
    });
});