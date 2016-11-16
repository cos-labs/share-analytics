define('ember-osf/models/registration', ['exports', 'ember-data', 'ember-osf/models/node'], function (exports, _emberData, _emberOsfModelsNode) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule models
     */

    /**
     * Model for OSF APIv2 registrations. This model may be used with one of several API endpoints. It may be queried directly,
     *  or accessed via relationship fields.
     * For field and usage information, see:
     * * https://api.osf.io/v2/docs/#!/v2/Registration_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/Registration_Detail_GET
     * * https://api.osf.io/v2/docs/#!/v2/Registration_Children_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/User_Registrations_GET
     *
     * @class Registration
     */
    exports['default'] = _emberOsfModelsNode['default'].extend({
        dateRegistered: _emberData['default'].attr('date'),
        pendingRegistrationApproval: _emberData['default'].attr('boolean'),
        embargoEndDate: _emberData['default'].attr('date'),
        pendingEmbargoApproval: _emberData['default'].attr('boolean'),
        withdrawn: _emberData['default'].attr('boolean'),
        withdrawalJustification: _emberData['default'].attr('string'),
        pendingWithdrawal: _emberData['default'].attr('boolean'),

        registrationSupplement: _emberData['default'].attr('string'),
        registeredMeta: _emberData['default'].attr(),

        registeredFrom: _emberData['default'].belongsTo('node', {
            inverse: 'registrations'
        }),
        registeredBy: _emberData['default'].belongsTo('user', {
            inverse: null
        }),
        contributors: _emberData['default'].hasMany('contributors'),
        comments: _emberData['default'].hasMany('comments'),
        draftRegistration: _emberData['default'].attr('string'),
        registrationChoice: _emberData['default'].attr('string'),
        liftEmbargo: _emberData['default'].attr()
        //more relationship
    });
});