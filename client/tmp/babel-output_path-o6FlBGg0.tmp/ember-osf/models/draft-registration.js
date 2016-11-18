define('ember-osf/models/draft-registration', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule models
     */

    /**
     * Model for OSF APIv2 draft registrations.
     * This model represents draft registration data and can be accessed as a relationship of a node.
     * For information on how to interact with a node's draft registrations, see:
     * * https://api.osf.io/v2/docs/#!/v2/Node_Draft_Registrations_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/Node_Draft_Registration_Detail_GET
     * @class DraftRegistration
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        registrationSupplement: _emberData['default'].attr('string'),
        registrationMetadata: _emberData['default'].attr(),
        datetimeInitiated: _emberData['default'].attr('date'),
        datetimeUpdated: _emberData['default'].attr('date'),
        branchedFrom: _emberData['default'].belongsTo('node', {
            inverse: null
        }),
        initiator: _emberData['default'].belongsTo('user', {
            inverse: null
        }),
        registrationSchema: _emberData['default'].belongsTo('metaschema', {
            inverse: null
        })
    });
});