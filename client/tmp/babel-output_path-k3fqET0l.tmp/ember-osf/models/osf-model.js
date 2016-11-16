define('ember-osf/models/osf-model', ['exports', 'ember', 'ember-data', 'ember-data-has-many-query'], function (exports, _ember, _emberData, _emberDataHasManyQuery) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule models
     */

    /**
     * Common properties and behaviors shared by all OSF APIv2 models
     *
     * @class OsfModel
     * @public
     */
    exports['default'] = _emberData['default'].Model.extend(_emberDataHasManyQuery['default'].ModelMixin, {
        links: _emberData['default'].attr('links'),
        embeds: _emberData['default'].attr('embed'),

        relationshipLinks: _ember['default'].computed.alias('links.relationships'),
        _dirtyRelationships: null,
        isNewOrDirty: function isNewOrDirty() {
            return this.get('isNew') || Object.keys(this.changedAttributes()).length;
        },
        init: function init() {
            this._super.apply(this, arguments);
            this.set('_dirtyRelationships', _ember['default'].Object.create({}));
        },
        /**
         * Looks up relationship on model and returns hasManyRelationship
         * or belongsToRelationship object.
         *
         * @method resolveRelationship
         * @private
         * @param {String} rel Name of the relationship on the model
         **/
        resolveRelationship: function resolveRelationship(rel) {
            var relation;
            var meta = this[rel].meta();
            if (meta.kind === 'hasMany') {
                relation = this.hasMany(rel).hasManyRelationship;
            } else if (meta.kind === 'belongsTo') {
                relation = this.belongsTo(rel).belongsToRelationship;
            }
            return relation;
        },
        save: function save() {
            var _this = this;

            var options = arguments.length <= 0 || arguments[0] === undefined ? {
                adapterOptions: {}
            } : arguments[0];

            if (options.adapterOptions.nested) {
                return this._super.apply(this, arguments);
            }

            this.set('_dirtyRelationships', {});
            this.eachRelationship(function (rel) {
                var relation = _this.resolveRelationship(rel);
                // TODO(samchrisinger): not sure if hasLoaded is a subset if the hasData state
                if (relation.hasData && relation.hasLoaded) {
                    var canonicalIds = relation.canonicalMembers.list.map(function (member) {
                        return member.record.get('id');
                    });
                    var currentIds = relation.members.list.map(function (member) {
                        return member.record.get('id');
                    });
                    var changes = {
                        create: relation.members.list.filter(function (m) {
                            return m.record.get('isNew');
                        }),
                        add: relation.members.list.filter(function (m) {
                            return !m.record.get('isNew') && canonicalIds.indexOf(m.record.get('id')) === -1;
                        }),
                        remove: relation.canonicalMembers.list.filter(function (m) {
                            return currentIds.indexOf(m.record.get('id')) === -1;
                        })
                    };

                    var other = _this.get('_dirtyRelationships.${rel}') || {};
                    _ember['default'].merge(other, changes);
                    _this.set('_dirtyRelationships.' + rel, other);
                }
            });
            return this._super.apply(this, arguments);
        }
    });
});