define('ember-osf/adapters/contributor', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _emberOsfAdaptersOsfAdapter) {
    'use strict';

    exports['default'] = _emberOsfAdaptersOsfAdapter['default'].extend({
        buildURL: function buildURL(modelName, id, snapshot, requestType) {
            // jshint ignore:line
            if (requestType === 'createRecord' || requestType === 'findRecord') {
                var nodeId;
                var sendEmail = true;
                if (snapshot) {
                    nodeId = snapshot.record.get('nodeId');
                    sendEmail = snapshot.record.get('sendEmail');
                } else {
                    nodeId = id.split('-').shift();
                }

                var node = this.store.peekRecord('node', nodeId);
                if (node) {
                    var base = this._buildRelationshipURL(node._internalModel.createSnapshot(), 'contributors');

                    if (requestType === 'findRecord') {
                        return '' + base + id.split('-').pop() + '/';
                    }

                    // Needed for Ember Data to update the inverse record's (the node's) relationship
                    var requestUrl = base + '?embed=node';

                    if (!sendEmail) {
                        requestUrl += '&send_email=false';
                    }

                    return requestUrl;
                } else {
                    throw new Error('Trying to add a contributor to a Node that hasn\'t been loaded into the store');
                }
            }
            return this._super.apply(this, arguments);
        }
    });
});