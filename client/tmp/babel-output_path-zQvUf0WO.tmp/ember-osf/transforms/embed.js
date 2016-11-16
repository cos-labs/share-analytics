define('ember-osf/transforms/embed', ['exports', 'ember-data/transform'], function (exports, _emberDataTransform) {
    'use strict';

    exports['default'] = _emberDataTransform['default'].extend({
        deserialize: function deserialize(serialized) {
            return serialized;
        },

        serialize: function serialize(deserialized) {
            return deserialized;
        }
    });
});