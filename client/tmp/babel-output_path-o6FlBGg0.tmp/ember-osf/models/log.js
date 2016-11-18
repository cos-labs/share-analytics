define('ember-osf/models/log', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule models
     */

    /**
     * Model for OSF APIv2 log entries. This model may be used with one of several API endpoints. It may be queried directly,
     *  or accessed via relationship fields.
     * For field and usage information, see:
     * * https://api.osf.io/v2/docs/#!/v2/Node_Log_Detail_GET
     * * https://api.osf.io/v2/docs/#!/v2/Node_Log_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/Registration_Log_List_GET
     * @class Log
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        date: _emberData['default'].attr('date'),
        action: _emberData['default'].attr('string'),
        params: _emberData['default'].attr(),
        node: _emberData['default'].belongsTo('node', {
            inverse: null
        }),
        originalNode: _emberData['default'].belongsTo('node', {
            inverse: 'logs'
        }),
        user: _emberData['default'].belongsTo('user'),
        linkedNode: _emberData['default'].belongsTo('node', {
            inverse: null
        }),
        templateNode: _emberData['default'].belongsTo('node', {
            inverse: null
        })
    });
});