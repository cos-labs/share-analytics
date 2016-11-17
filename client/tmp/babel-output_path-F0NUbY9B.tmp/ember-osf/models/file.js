define('ember-osf/models/file', ['exports', 'ember-data', 'ember-osf/models/osf-model', 'ember-osf/mixins/file-item'], function (exports, _emberData, _emberOsfModelsOsfModel, _emberOsfMixinsFileItem) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule models
   */

  /**
   * Model for OSF APIv2 files. This model may be used with one of several API endpoints. It may be queried directly,
   *  or (more commonly) accessed via relationship fields.
   * This model is used for basic file metadata. To interact with file contents directly, see the `file-manager` service.
   * For field and usage information, see:
   * * https://api.osf.io/v2/docs/#!/v2/File_Detail_GET
   * * https://api.osf.io/v2/docs/#!/v2/Node_Files_List_GET
   * * https://api.osf.io/v2/docs/#!/v2/Node_File_Detail_GET
   * * https://api.osf.io/v2/docs/#!/v2/Registration_Files_List_GET
   * * https://api.osf.io/v2/docs/#!/v2/Registration_File_Detail_GET
   * @class File
   */
  exports['default'] = _emberOsfModelsOsfModel['default'].extend(_emberOsfMixinsFileItem['default'], {
    _isFileModel: true,

    name: _emberData['default'].attr('string'),
    kind: _emberData['default'].attr('string'),
    guid: _emberData['default'].attr('string'),
    path: _emberData['default'].attr('string'),
    size: _emberData['default'].attr('number'),
    provider: _emberData['default'].attr('string'),
    materializedPath: _emberData['default'].attr('string'),
    lastTouched: _emberData['default'].attr('date'),
    dateModified: _emberData['default'].attr('date'),
    dateCreated: _emberData['default'].attr('date'),
    extra: _emberData['default'].attr(),
    tags: _emberData['default'].attr(),

    parentFolder: _emberData['default'].belongsTo('file', { inverse: 'files' }),

    // Folder attributes
    files: _emberData['default'].hasMany('file', { inverse: 'parentFolder' }),

    // File attributes
    versions: _emberData['default'].hasMany('file-version'),
    comments: _emberData['default'].hasMany('comment'),
    node: _emberData['default'].belongsTo('node'), // TODO: In the future apiv2 may also need to support this pointing at nodes OR registrations
    checkout: _emberData['default'].attr('string')
  });
});