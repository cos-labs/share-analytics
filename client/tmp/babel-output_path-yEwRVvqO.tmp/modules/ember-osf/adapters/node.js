import OsfAdapter from './osf-adapter';

export default OsfAdapter.extend({
    buildURL: function buildURL(modelName, id, snapshot, requestType) {
        // jshint ignore:line
        if (requestType === 'createRecord') {
            var _parent = snapshot.record.belongsTo('parent').belongsToRelationship.members.list[0];
            if (_parent) {
                return this._buildRelationshipURL(_parent.createSnapshot(), 'children');
            }
        }
        return this._super.apply(this, arguments);
    }
});