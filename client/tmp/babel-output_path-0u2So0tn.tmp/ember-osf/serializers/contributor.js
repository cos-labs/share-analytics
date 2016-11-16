define('ember-osf/serializers/contributor', ['exports', 'ember', 'ember-osf/serializers/osf-serializer'], function (exports, _ember, _emberOsfSerializersOsfSerializer) {
    'use strict';

    exports['default'] = _emberOsfSerializersOsfSerializer['default'].extend({
        serialize: function serialize(snapshot) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            // Restore relationships to serialized data
            var serialized = this._super(snapshot, options);

            var opts = {};

            if (snapshot.record.get('isNew')) {
                opts = {
                    includeUser: true
                };
            }
            _ember['default'].merge(opts, options);

            // APIv2 expects contributor information to be nested under relationships.
            if (opts.includeUser) {
                serialized.data.relationships = {
                    users: {
                        data: {
                            id: snapshot.record.get('userId'),
                            type: 'users'
                        }
                    }
                };
            }
            return serialized;
        }
    });
});