define('ember-osf/models/file-version', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule models
   */

  /**
   * Model for OSF APIv2 file versions. Primarily used in relationship fields.
   * This model is used for basic file version metadata. To interact with file contents directly, see the `file-manager` service.
   * For field and usage information, see:
   * * https://api.osf.io/v2/docs/#!/v2/File_Versions_List_GET
   * * https://api.osf.io/v2/docs/#!/v2/File_Version_Detail_GET
   * @class FileVersion
  */
  exports['default'] = _emberOsfModelsOsfModel['default'].extend({
    size: _emberData['default'].attr('number'),
    contentType: _emberData['default'].attr('string')
  });
});