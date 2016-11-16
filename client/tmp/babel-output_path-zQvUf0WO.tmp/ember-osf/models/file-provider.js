define('ember-osf/models/file-provider', ['exports', 'ember-data', 'ember-osf/models/osf-model', 'ember-osf/mixins/file-item'], function (exports, _emberData, _emberOsfModelsOsfModel, _emberOsfMixinsFileItem) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule models
   */

  /**
   * Model for OSF APIv2 file providers. Primarily used in relationship fields.
   * This model is used for basic file provider metadata. To interact with file contents directly, see the `file-manager` service.
   * For field and usage information, see:
   * * https://api.osf.io/v2/docs/#!/v2/Node_Providers_List_GET
   * * https://api.osf.io/v2/docs/#!/v2/Node_Provider_Detail_GET
   * * https://api.osf.io/v2/docs/#!/v2/Registration_Providers_List_GET
   * @class FileProvider
   */
  exports['default'] = _emberOsfModelsOsfModel['default'].extend(_emberOsfMixinsFileItem['default'], {
    isProvider: true,

    name: _emberData['default'].attr('string'),
    kind: _emberData['default'].attr('string'),
    path: _emberData['default'].attr('string'),
    provider: _emberData['default'].attr('string'),
    files: _emberData['default'].hasMany('file'),
    node: _emberData['default'].belongsTo('node')
  });
});