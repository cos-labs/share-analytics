define('ember-osf/models/institution', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule models
     */

    /**
     * Model for OSF APIv2 institutions. This model may be used with one of several API endpoints. It may be queried directly,
     *  or accessed via relationship fields.
     * For field and usage information, see:
     * * https://api.osf.io/v2/docs/#!/v2/Institution_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/Institution_Detail_GET
     * * https://api.osf.io/v2/docs/#!/v2/Node_Institutions_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/Registration_Institutions_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/User_Institutions_GET
     * @class Institution
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        name: _emberData['default'].attr('string'),
        description: _emberData['default'].attr('string'),
        logoPath: _emberData['default'].attr('string'),
        authUrl: _emberData['default'].attr('string'),

        users: _emberData['default'].hasMany('users', {
            inverse: 'affiliatedInstitutions'
        }),
        nodes: _emberData['default'].hasMany('nodes', {
            inverse: 'affiliatedInstitutions'
        }),
        registrations: _emberData['default'].hasMany('registrations', {
            inverse: 'affiliatedInstitutions'
        })
    });
});