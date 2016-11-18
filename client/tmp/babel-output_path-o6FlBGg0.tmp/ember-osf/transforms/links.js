define('ember-osf/transforms/links', ['exports', 'ember-data/transform'], function (exports, _emberDataTransform) {
    /*
     An empty stub. For now just leave links as a vanilla JS Object
    */
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