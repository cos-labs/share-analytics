define('ember-osf/models/collection', ['exports', 'ember-data', 'ember-osf/models/osf-model'], function (exports, _emberData, _emberOsfModelsOsfModel) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule models
     */

    /**
     * Model for OSF APIv2 collections
     * For field and usage information, see:
     * * https://api.osf.io/v2/docs/#!/v2/Collection_List_GET
     *
     * @class Collection
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend({
        title: _emberData['default'].attr('string'),
        dateCreated: _emberData['default'].attr('date'),
        dateModified: _emberData['default'].attr('date'),
        bookmarks: _emberData['default'].attr('boolean'),
        // nodeLinks: DS.hasMany('node-links', {
        //     inverse:null
        // }),
        linkedNodes: _emberData['default'].hasMany('nodes', {
            inverse: null,
            serializerType: 'linked-node'
        })

    });
});