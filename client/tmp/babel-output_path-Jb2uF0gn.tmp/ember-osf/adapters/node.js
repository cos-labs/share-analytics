define('ember-osf/adapters/node', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _emberOsfAdaptersOsfAdapter) {
    'use strict';

    exports['default'] = _emberOsfAdaptersOsfAdapter['default'].extend({
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
});