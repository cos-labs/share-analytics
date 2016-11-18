define('ember-osf/models/contributor', ['exports', 'ember', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _ember, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule models
     */

    /**
     * Model for OSF APIv2 contributors. Primarily accessed via relationship fields.
     * For field and usage information, see:
     * * https://api.osf.io/v2/docs/#!/v2/Node_Contributors_List_GET
     * @class Contributor
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        bibliographic: _emberData['default'].attr('boolean'),
        permission: _emberData['default'].attr('string'),

        _userId: null,
        userId: _ember['default'].computed('_userId', {
            get: function get() {
                if (this.get('isNew')) {
                    return this.get('_userId');
                } else {
                    return this.get('id').split('-').pop();
                }
            },
            set: function set(_, userId) {
                this.set('_userId', userId);
            }
        }).volatile(),
        _nodeId: null,
        nodeId: _ember['default'].computed('_nodeId', {
            get: function get() {
                if (this.get('isNew')) {
                    return this.get('_nodeId');
                } else {
                    return this.get('id').split('-').shift();
                }
            },
            set: function set(_, nodeId) {
                this.set('_nodeId', nodeId);
            }
        }).volatile(),

        users: _emberData['default'].belongsTo('user'),
        unregisteredContributor: _emberData['default'].attr('string'),
        index: _emberData['default'].attr('number'),
        fullName: _emberData['default'].attr('string'),
        email: _emberData['default'].attr('string'),
        sendEmail: _emberData['default'].attr('boolean'),

        node: _emberData['default'].belongsTo('node', {
            inverse: 'contributors'
        })
    });
});