define('ember-osf/models/node-link', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule models
   */

  /**
   * Model for OSF APIv2 node links. This model may refer to one of several API endpoints. It may be queried directly,
   *  or accessed via relationship fields.
   * For field and usage information, see:
   * * https://api.osf.io/v2/docs/#!/v2/Node_Links_List_GET
   * * https://api.osf.io/v2/docs/#!/v2/Node_Links_Detail_GET
   * * https://api.osf.io/v2/docs/#!/v2/Registration_Node_Links_List_GET
   * * https://api.osf.io/v2/docs/#!/v2/Registration_Node_Links_Detail_GET
   * @class NodeLink
   */
  exports['default'] = _emberOsfModelsOsfModel['default'].extend({
    targetNode: _emberData['default'].belongsTo('node')
  });
});