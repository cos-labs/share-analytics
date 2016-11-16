define('ember-osf/serializers/file-provider', ['exports', 'ember-osf/serializers/osf-serializer'], function (exports, _emberOsfSerializersOsfSerializer) {
    'use strict';

    exports['default'] = _emberOsfSerializersOsfSerializer['default'].extend({
        modelNameFromPayloadKey: function modelNameFromPayloadKey() {
            return 'file-provider';
        }
    });
});