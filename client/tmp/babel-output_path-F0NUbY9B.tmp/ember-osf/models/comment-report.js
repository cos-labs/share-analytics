define('ember-osf/models/comment-report', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule models
   */

  /**
   * Model for OSF APIv2 comment reports. Primarily accessed via relationship fields.
   * For field and usage information, see:
   * * https://api.osf.io/v2/docs/#!/v2/Comment_Reports_List_GET
   *
   * @class CommentReport
   */
  exports['default'] = _emberOsfModelsOsfModel['default'].extend({
    category: _emberData['default'].attr('string'),
    text: _emberData['default'].belongsTo('comment')
  });
});