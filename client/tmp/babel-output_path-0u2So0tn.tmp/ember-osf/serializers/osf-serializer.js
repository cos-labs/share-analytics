define('ember-osf/serializers/osf-serializer', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule serializers
     */

    /**
     * Base serializer class for all OSF APIv2 endpoints. Provides custom behaviors for embeds, relationships, and pagination.
     * @class OsfSerializer
     * @extends DS.JSONAPISerializer
     */
    exports['default'] = _emberData['default'].JSONAPISerializer.extend({
        attrs: {
            links: {
                serialize: false
            },
            embeds: {
                serialize: false
            }
        },

        /**
         * Extract information about records embedded inside this request
         * @method _extractEmbeds
         * @param {Object} resourceHash
         * @return {Array}
         * @private
         */
        _extractEmbeds: function _extractEmbeds(resourceHash) {
            var _this = this;

            if (!resourceHash.embeds) {
                return []; // Nothing to do
            }
            var included = [];
            resourceHash.relationships = resourceHash.relationships || {};
            for (var embedded in resourceHash.embeds) {
                if (!(embedded || resourceHash.embeds[embedded])) {
                    continue;
                }
                //TODO Pagination probably breaks here
                var data = resourceHash.embeds[embedded].data || resourceHash.embeds[embedded];
                if (Array.isArray(data)) {
                    included = included.concat(data);
                } else {
                    included.push(data);
                }
                resourceHash.embeds[embedded].type = embedded;
                // Merges links returned from embedded object with relationship links, so all returned links are available.
                var embeddedLinks = resourceHash.embeds[embedded].links || {};
                resourceHash.embeds[embedded].links = Object.assign(embeddedLinks, resourceHash.relationships[embedded].links);
                resourceHash.relationships[embedded] = resourceHash.embeds[embedded];
                resourceHash.relationships[embedded].is_embedded = true;
            }
            delete resourceHash.embeds;
            //Recurse in, includeds are only processed on the top level. Embeds are nested.
            return included.concat(included.reduce(function (acc, include) {
                return acc.concat(_this._extractEmbeds(include));
            }, []));
        },

        _mergeFields: function _mergeFields(resourceHash) {
            // ApiV2 `links` exist outside the attributes field; make them accessible to the data model
            if (resourceHash.links) {
                // TODO: Should also test whether model class defines a links field
                resourceHash.attributes.links = resourceHash.links;
            }
            this._extractEmbeds(resourceHash);

            if (resourceHash.relationships && resourceHash.attributes.links) {
                resourceHash.attributes.links = _ember['default'].$.extend(resourceHash.attributes.links, {
                    relationships: resourceHash.relationships
                });
            }
            return resourceHash;
        },

        extractAttributes: function extractAttributes(modelClass, resourceHash) {
            resourceHash = this._mergeFields(resourceHash);
            return this._super(modelClass, resourceHash);
        },

        keyForAttribute: function keyForAttribute(key) {
            return _ember['default'].String.underscore(key);
        },

        keyForRelationship: function keyForRelationship(key) {
            return _ember['default'].String.underscore(key);
        },

        serialize: function serialize(snapshot, options) {
            var serialized = this._super(snapshot, options);
            serialized.data.type = _ember['default'].String.underscore(serialized.data.type);
            // Only send dirty attributes in request
            if (!snapshot.record.get('isNew')) {
                for (var attribute in serialized.data.attributes) {
                    if (!(_ember['default'].String.camelize(attribute) in snapshot.record.changedAttributes())) {
                        delete serialized.data.attributes[attribute];
                    }
                }
            }
            // Don't send relationships to the server; this can lead to 500 errors.
            delete serialized.data.relationships;
            return serialized;
        },

        serializeAttribute: function serializeAttribute(snapshot, json, key, attribute) {
            // jshint ignore:line
            // In certain cases, a field may be omitted from the server payload, but have a value (undefined)
            // when serialized from the model. (eg node.template_from)
            // Omit fields with a value of undefined before sending to the server. (but still allow null to be sent)
            var val = snapshot.attr(key);
            if (val !== undefined) {
                this._super.apply(this, arguments);
            }
        },

        normalizeArrayResponse: function normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
            // jshint ignore:line
            // Ember data does not yet support pagination. For any request that returns more than one result, extract
            //  links.meta from the payload links section, and add to the model metadata manually.
            var documentHash = this._super.apply(this, arguments);
            documentHash.meta = documentHash.meta || {};
            documentHash.meta.pagination = _ember['default'].get(payload || {}, 'links.meta');
            documentHash.meta.total = Math.ceil(documentHash.meta.pagination.total / documentHash.meta.pagination.per_page);
            return documentHash;
        }
    });
});