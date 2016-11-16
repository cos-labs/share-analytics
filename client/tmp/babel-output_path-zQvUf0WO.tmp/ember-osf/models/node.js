define('ember-osf/models/node', ['exports', 'ember', 'ember-data', 'ember-osf/models/osf-model', 'ember-osf/mixins/file-item'], function (exports, _ember, _emberData, _emberOsfModelsOsfModel, _emberOsfMixinsFileItem) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule models
     */

    /**
     * Model for OSF APIv2 nodes. This model may be used with one of several API endpoints. It may be queried directly,
     *  or accessed via relationship fields.
     * For field and usage information, see:
     * * https://api.osf.io/v2/docs/#!/v2/Node_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/Node_Detail_GET
     * * https://api.osf.io/v2/docs/#!/v2/Node_Children_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/Linked_Nodes_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/Node_Forks_List_GET
     * * https://api.osf.io/v2/docs/#!/v2/User_Nodes_GET
     * @class Node
     */
    exports['default'] = _emberOsfModelsOsfModel['default'].extend(_emberOsfMixinsFileItem['default'], {
        isNode: true,

        title: _emberData['default'].attr('string'),
        description: _emberData['default'].attr('string'),
        category: _emberData['default'].attr('string'),

        currentUserPermissions: _emberData['default'].attr('string'),

        fork: _emberData['default'].attr('boolean'),
        collection: _emberData['default'].attr('boolean'),
        registration: _emberData['default'].attr('boolean'),
        'public': _emberData['default'].attr('boolean'),

        dateCreated: _emberData['default'].attr('date'),
        dateModified: _emberData['default'].attr('date'),

        tags: _emberData['default'].attr(),

        templateFrom: _emberData['default'].attr('string'),

        parent: _emberData['default'].belongsTo('node', {
            inverse: 'children'
        }),
        children: _emberData['default'].hasMany('nodes', {
            inverse: 'parent'
        }),
        affiliatedInstitutions: _emberData['default'].hasMany('institutions', {
            inverse: 'nodes'
        }),
        comments: _emberData['default'].hasMany('comments'),
        contributors: _emberData['default'].hasMany('contributors', {
            allowBulkUpdate: true,
            allowBulkRemove: true,
            inverse: 'node'
        }),

        files: _emberData['default'].hasMany('file-provider'),
        //forkedFrom: DS.belongsTo('node'),
        nodeLinks: _emberData['default'].hasMany('node-links', {
            inverse: null
        }),
        registrations: _emberData['default'].hasMany('registrations', {
            inverse: 'registeredFrom'
        }),

        draftRegistrations: _emberData['default'].hasMany('draft-registrations', {
            inverse: 'branchedFrom'
        }),

        root: _emberData['default'].belongsTo('node', {
            inverse: null
        }),
        logs: _emberData['default'].hasMany('logs'),

        // These are only computeds because maintaining separate flag values on different classes would be a headache TODO: Improve.
        /**
         * Is this a project? Flag can be used to provide template-specific behavior for different resource types.
         * @property isProject
         * @type boolean
         */
        isProject: _ember['default'].computed.equal('constructor.modelName', 'node'),
        /**
         * Is this a registration? Flag can be used to provide template-specific behavior for different resource types.
         * @property isRegistration
         * @type boolean
         */
        isRegistration: _ember['default'].computed.equal('constructor.modelName', 'registration'),

        /**
         * Is this node being viewed through an anonymized, view-only link?
         * @property isAnonymous
         * @type boolean
         */
        isAnonymous: _ember['default'].computed.bool('meta.anonymous'),

        /**
         * Determine whether the specified user ID is a contributor on this node
         * @method isContributor
         * @param {String} userId
         * @returns {boolean} Whether the specified user is a contributor on this node
         */
        isContributor: function isContributor(userId) {
            // Return true if there is at least one matching contributor for this user ID
            if (!userId) {
                return new _ember['default'].RSVP.Promise(function (resolve) {
                    return resolve(false);
                });
            }
            var contribId = this.get('id') + '-' + userId;
            return this.store.findRecord('contributor', contribId).then(function () {
                return true;
            }, function () {
                return false;
            });
        },

        save: function save() {
            // Some duplicate logic from osf-model#save needed to support
            // contributor edits being saved through the node
            // Note: order is important here so _dirtyRelationships gets set by the _super call
            var promise = this._super.apply(this, arguments);
            if (!this.get('_dirtyRelationships.contributors')) {
                this.set('_dirtyRelationships.contributors', {});
            }

            var contributors = this.hasMany('contributors').hasManyRelationship;
            this.set('_dirtyRelationships.contributors.update', contributors.members.list.filter(function (m) {
                return !m.record.get('isNew') && Object.keys(m.record.changedAttributes()).length > 0;
            }));
            // Need to included created contributors even in relationship
            // hasLoaded is false
            this.set('_dirtyRelationships.contributors.create', contributors.members.list.filter(function (m) {
                return m.record.get('isNew');
            }));
            // Contributors are a 'real' delete, not just a de-reference
            this.set('_dirtyRelationships.contributors.delete', this.get('_dirtyRelationships.contributors.remove') || []);
            this.set('_dirtyRelationships.contributors.remove', []);
            return promise;
        },

        addChild: function addChild(title, description, category) {
            var child = this.store.createRecord('node', {
                title: title,
                category: category || 'project',
                description: description || null,
                parent: this
            });

            return child.save();
        },

        addContributor: function addContributor(userId, permission, isBibliographic, sendEmail, fullName, email) {
            var contrib = this.store.createRecord('contributor', {
                permission: permission,
                bibliographic: isBibliographic,
                sendEmail: sendEmail,
                nodeId: this.get('id'),
                userId: userId,
                fullName: fullName,
                email: email
            });

            return contrib.save();
        },

        removeContributor: function removeContributor(contributor) {
            return contributor.destroyRecord();
        },

        updateContributor: function updateContributor(contributor, permissions, bibliographic) {
            if (!_ember['default'].isEmpty(permissions)) contributor.set('permission', permissions);
            if (!_ember['default'].isEmpty(bibliographic)) contributor.set('bibliographic', bibliographic);
            return contributor.save();
        },

        updateContributors: function updateContributors(contributors, permissionsChanges, bibliographicChanges) {
            var _this = this;

            var payload = contributors.filter(function (contrib) {
                return contrib.id in permissionsChanges || contrib.id in bibliographicChanges;
            }).map(function (contrib) {
                if (contrib.id in permissionsChanges) {
                    contrib.set('permission', permissionsChanges[contrib.id]);
                }

                if (contrib.id in bibliographicChanges) {
                    contrib.set('bibliographic', bibliographicChanges[contrib.id]);
                }

                return contrib.serialize({
                    includeId: true,
                    includeUser: false
                }).data;
            });

            return this.store.adapterFor('contributor').ajax(this.get('links.relationships.contributors.links.related.href'), 'PATCH', {
                data: {
                    data: payload
                },
                isBulk: true
            }).then(function (resp) {
                _this.store.pushPayload(resp);
                return contributors;
            });
        }
    });
});