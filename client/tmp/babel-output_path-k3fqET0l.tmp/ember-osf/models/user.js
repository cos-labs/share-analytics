define('ember-osf/models/user', ['exports', 'ember', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _ember, _emberData, _emberOsfModelsOsfModel) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule models
   */

  /**
   * Model for OSF APIv2 users. This model may be used with one of several API endpoints. It may be queried directly,
   *  or accessed via relationship fields.
   * For field and usage information, see:
   * * https://api.osf.io/v2/docs/#!/v2/User_List_GET
   * * https://api.osf.io/v2/docs/#!/v2/User_Detail_GET
   * * https://api.osf.io/v2/docs/#!/v2/Institution_User_List_GET
   * @class User
   */
  exports['default'] = _emberOsfModelsOsfModel['default'].extend({
    fullName: _emberData['default'].attr('string'),
    givenName: _emberData['default'].attr('string'),
    middleNames: _emberData['default'].attr(),
    familyName: _emberData['default'].attr('string'),

    dateRegistered: _emberData['default'].attr('date'),
    // email
    username: _emberData['default'].attr('string'),

    nodes: _emberData['default'].hasMany('nodes'),
    registrations: _emberData['default'].hasMany('registrations'),

    affiliatedInstitutions: _emberData['default'].hasMany('institutions', {
      inverse: 'users'
    }),

    // Calculated fields
    profileURL: _ember['default'].computed.alias('links.html'),
    profileImage: _ember['default'].computed.alias('links.profile_image')
  });
});