define('ember-osf/adapters/osf-adapter', ['exports', 'ember', 'ember-data', 'ember-data-has-many-query', 'ember-get-config', 'ember-osf/mixins/generic-data-adapter', 'ember-inflector'], function (exports, _ember, _emberData, _emberDataHasManyQuery, _emberGetConfig, _emberOsfMixinsGenericDataAdapter, _emberInflector) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule adapters
     */

    /**
     * Base adapter class for all OSF APIv2 endpoints
     *
     * @class OsfAdapter
     * @extends DS.JSONAPIAdapter
     * @uses HasManyQuery.RESTAdapterMixin
     * @uses GenericDataAdapterMixin
     */
    exports['default'] = _emberData['default'].JSONAPIAdapter.extend(_emberDataHasManyQuery['default'].RESTAdapterMixin, _emberOsfMixinsGenericDataAdapter['default'], {
        authorizer: _emberGetConfig['default']['ember-simple-auth'].authorizer,
        host: _emberGetConfig['default'].OSF.apiUrl,
        namespace: _emberGetConfig['default'].OSF.apiNamespace,
        buildURL: function buildURL(modelName, id, snapshot, requestType) {
            var url = this._super.apply(this, arguments);
            var options = (snapshot ? snapshot.adapterOptions : false) || {};
            if (requestType === 'deleteRecord' || requestType === 'updateRecord' || requestType === 'findRecord') {
                if (snapshot.record.get('links.self')) {
                    url = snapshot.record.get('links.self');
                }
            } else if (options.url) {
                url = options.url;
            }

            // Fix issue where CORS request failed on 301s: Ember does not seem to append trailing
            // slash to URLs for single documents, but DRF redirects to force a trailing slash
            if (url.lastIndexOf('/') !== url.length - 1) {
                url += '/';
            }
            return url;
        },
        /**
         * Construct a URL for a relationship create/update/delete.
         *
         * @method _buildRelationshipURL
         * @private
         * @param {DS.Snapshot} snapshot
         * @param {String} relationship the relationship to build a url for
         * @return {String} a URL
         **/
        _buildRelationshipURL: function _buildRelationshipURL(snapshot, relationship) {
            var links = relationship ? snapshot.record.get('relationshipLinks.' + _ember['default'].String.underscore(relationship) + '.links') : false;
            if (links && (links.self || links.related)) {
                return links.self ? links.self.href : links.related.href;
            }
            return null;
        },
        /**
         * Handle creation of related resources
         *
         * @method _createRelated
         * @private
         * @param {DS.Store} store
         * @param {DS.Snapshot} snapshot snapshot of inverse record
         * @param {DS.Snapshot[]} createdSnapshots
         * @param {String} relationship
         * @param {String} url
         * @param {Boolean} isBulk
         **/
        _createRelated: function _createRelated(store, snapshot, createdSnapshots, relationship, url) {
            var isBulk = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];
            // jshint ignore:line
            // TODO support bulk create?
            // if (isBulk) {
            //
            // }
            return createdSnapshots.map(function (s) {
                return s.record.save({
                    adapterOptions: {
                        nested: true,
                        url: url,
                        requestType: 'create'
                    }
                }).then(function (res) {
                    snapshot.record.resolveRelationship(relationship).addCanonicalRecord(s.record._internalModel);
                    return res;
                });
            });
        },
        /**
         * Handle add(s) of related resources. This differs from CREATEs in that the related
         * record is already saved and is just being associated with the inverse record.
         *
         * @method _addRelated
         * @private
         * @param {DS.Store} store
         * @param {DS.Snapshot} snapshot snapshot of inverse record
         * @param {DS.Snapshot[]} addedSnapshots
         * @param {String} relationship
         * @param {String} url
         * @param {Boolean} isBulk
         **/
        _addRelated: function _addRelated(store, snapshot, addedSnapshots, relationship, url) {
            var isBulk = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];

            return this._doRelatedRequest(store, snapshot, addedSnapshots, relationship, url, 'POST', isBulk).then(function (res) {
                addedSnapshots.forEach(function (s) {
                    snapshot.record.resolveRelationship(relationship).addCanonicalRecord(s.record._internalModel);
                });
                return res;
            });
        },
        /**
         * Handle update(s) of related resources
         *
         * @method _updateRelated
         * @private
         * @param {DS.Store} store
         * @param {DS.Snapshot} snapshot snapshot of inverse record
         * @param {DS.Snapshot[]} updatedSnapshots
         * @param {String} relationship
         * @param {String} url
         * @param {Boolean} isBulk
         **/
        _updateRelated: function _updateRelated(store, snapshot, updatedSnapshots, relationship, url) {
            var isBulk = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];

            return this._doRelatedRequest(store, snapshot, updatedSnapshots, relationship, url, 'PATCH', isBulk).then(function (res) {
                var relatedType = (0, _emberInflector.singularize)(snapshot.record[relationship].meta().type);
                res.data.forEach(function (item) {
                    var record = store.push(store.normalize(relatedType, item));
                    snapshot.record.resolveRelationship(relationship).addCanonicalRecord(record._internalModel);
                });
                return res;
            });
        },
        /**
         * Handle removal of related resources. This differs from DELETEs in that the related
         * record is not deleted, just dissociated from the inverse record.
         *
         * @method _removeRelated
         * @private
         * @param {DS.Store} store
         * @param {DS.Snapshot} snapshot snapshot of inverse record
         * @param {DS.Snapshot[]} removedSnapshots
         * @param {String} relationship
         * @param {String} url
         * @param {Boolean} isBulk
         **/
        _removeRelated: function _removeRelated(store, snapshot, removedSnapshots, relationship, url) {
            var isBulk = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];

            return this._doRelatedRequest(store, snapshot, removedSnapshots, relationship, url, 'DELETE', isBulk).then(function (res) {
                removedSnapshots.forEach(function (s) {
                    return snapshot.record.resolveRelationship(relationship).removeCanonicalRecord(s.record._internalModel);
                });
                return res || [];
            });
        },
        /**
         * Handle deletion of related resources
         *
         * @method _deleteRelated
         * @private
         * @param {DS.Store} store
         * @param {DS.Snapshot} snapshot snapshot of inverse record
         * @param {DS.Snapshot[]} deletedSnapshots
         * @param {String} relationship
         * @param {String} url
         * @param {Boolean} isBulk
         **/
        _deleteRelated: function _deleteRelated(store, snapshot, deletedSnapshots, relationship, url) {
            var isBulk = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];
            // jshint ignore:line
            return this._removeRelated.apply(this, arguments).then(function () {
                deletedSnapshots.forEach(function (s) {
                    return s.record.unloadRecord();
                });
            });
        },
        /**
         * A helper for making _*Related requests
         *
         * @method _doRelatedRequest
         * @private
         * @param {DS.Store} store
         * @param {DS.Snapshot} snapshot snapshot of inverse record
         * @param {DS.Snapshot[]} relatedSnapshots
         * @param {String} relationship
         * @param {String} url
         * @param {String} requestMethod
         * @param {Boolean} isBulk
         **/
        _doRelatedRequest: function _doRelatedRequest(store, snapshot, relatedSnapshots, relationship, url, requestMethod) {
            var isBulk = arguments.length <= 6 || arguments[6] === undefined ? false : arguments[6];

            var data = {};
            var relatedMeta = snapshot.record[relationship].meta();
            var type = (0, _emberInflector.singularize)(relatedMeta.type);
            var serializer = store.serializerFor(type);
            if (relatedMeta.options.serializerType) {
                serializer = store.serializerFor(relatedMeta.options.serializerType);
            }
            if (_ember['default'].isArray(relatedSnapshots)) {
                data.data = relatedSnapshots.map(function (relatedSnapshot) {
                    var item = {};
                    serializer.serializeIntoHash(item, store.modelFor(type), relatedSnapshot, {
                        forRelationship: true,
                        isBulk: isBulk
                    });
                    if (_ember['default'].isArray(item.data) && item.data.length === 1) {
                        return item.data[0];
                    }
                    return item.data;
                });
            } else {
                serializer.serializeIntoHash(data, store.modelFor(type), relatedSnapshots, {
                    forRelationship: true,
                    isBulk: isBulk
                });
            }
            return this.ajax(url, requestMethod, {
                data: data,
                isBulk: isBulk
            }).then(function (res) {
                if (!_ember['default'].$.isArray(res.data)) {
                    res.data = [res.data];
                }
                return res;
            });
        },
        /**
         * Delegate a series of requests based on a snapshot, relationship, and a change.
         * The change argument can be 'delete', 'remove', 'update', 'add', 'create'
         *
         * @method _handleRelatedRequest
         * @private
         * @param {DS.Store} store
         * @param {DS.Model} type
         * @param {DS.Snapshot} snapshot
         * @param {String} relationship
         * @param {String} change
         **/
        _handleRelatedRequest: function _handleRelatedRequest(store, type, snapshot, relationship, change) {
            var related = snapshot.record.get('_dirtyRelationships.' + relationship + '.' + change).map(function (r) {
                if (r._internalModel) {
                    return r._internalModel.createSnapshot();
                }
                return r.createSnapshot();
            });
            if (!related.length) {
                return [];
            }

            var relatedMeta = snapshot.record[relationship].meta();
            var url = this._buildRelationshipURL(snapshot, relationship);
            var adapter = store.adapterFor(type.modelName);
            var allowBulk = relatedMeta.options['allowBulk' + _ember['default'].String.capitalize(change)];

            if (related.record) {
                related = [related];
            }

            var response;
            response = adapter['_' + change + 'Related'](store, snapshot, related, relationship, url, allowBulk);
            return response;
        },
        updateRecord: function updateRecord(store, type, snapshot) {
            var _this = this;

            var relatedRequests = {};
            var dirtyRelationships = snapshot.record.get('_dirtyRelationships');
            Object.keys(dirtyRelationships).forEach(function (relationship) {
                var promises = [];
                var changed = dirtyRelationships[relationship];
                Object.keys(changed).forEach(function (change) {
                    promises = promises.concat(_this._handleRelatedRequest(store, type, snapshot, relationship, change) || []);
                });
                if (promises.length) {
                    relatedRequests[relationship] = _ember['default'].RSVP.allSettled(promises);
                }
            });
            var relatedPromise = _ember['default'].RSVP.hashSettled(relatedRequests);
            if (Object.keys(snapshot.record.changedAttributes()).length) {
                return this._super.apply(this, arguments).then(function (response) {
                    return relatedPromise.then(function () {
                        return response;
                    });
                });
            } else {
                return relatedPromise.then(function () {
                    return null;
                });
            }
        },
        ajaxOptions: function ajaxOptions(_, __, options) {
            var ret = this._super.apply(this, arguments);
            if (options && options.isBulk) {
                ret.contentType = 'application/vnd.api+json; ext=bulk';
            }
            return ret;
        },
        pathForType: function pathForType(modelName) {
            var underscored = _ember['default'].String.underscore(modelName);
            return _ember['default'].String.pluralize(underscored);
        }
    });
});