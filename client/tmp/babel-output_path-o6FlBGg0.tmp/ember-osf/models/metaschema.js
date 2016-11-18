define('ember-osf/models/metaschema', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule models
   */

  /**
   * Model for OSF APIv2 metaschemas.
   * This model describes metaschemas and can be directly queried.
   * For information on how to retrieve metaschemas see:
   * * https://api.osf.io/v2/docs/#!/v2/Meta_Schemas_List_GET
   * * https://api.osf.io/v2/docs/#!/v2/Meta_Schema_Detail_GET
   * @class Metaschema
   */

  exports['default'] = _emberOsfModelsOsfModel['default'].extend({
    name: _emberData['default'].attr('string'),
    schemaVersion: _emberData['default'].attr('number'),
    schema: _emberData['default'].attr()
  });
});