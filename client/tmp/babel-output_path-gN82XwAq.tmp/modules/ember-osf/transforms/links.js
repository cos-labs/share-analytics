/*
 An empty stub. For now just leave links as a vanilla JS Object
*/
import Transform from 'ember-data/transform';

export default Transform.extend({
    deserialize: function deserialize(serialized) {
        return serialized;
    },
    serialize: function serialize(deserialized) {
        return deserialized;
    }
});