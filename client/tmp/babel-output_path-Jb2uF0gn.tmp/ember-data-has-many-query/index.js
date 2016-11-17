define('ember-data-has-many-query/index', ['exports', 'ember-data-has-many-query/mixins/model', 'ember-data-has-many-query/mixins/rest-adapter', 'ember-data-has-many-query/belongs-to-sticky'], function (exports, _emberDataHasManyQueryMixinsModel, _emberDataHasManyQueryMixinsRestAdapter, _emberDataHasManyQueryBelongsToSticky) {
  'use strict';

  var RelationshipQuery = function RelationshipQuery() {
    this.ModelMixin = _emberDataHasManyQueryMixinsModel['default'];
    this.RESTAdapterMixin = _emberDataHasManyQueryMixinsRestAdapter['default'];
    this.belongsToSticky = _emberDataHasManyQueryBelongsToSticky['default'];
  };

  var relationshipQuery = new RelationshipQuery();

  exports.ModelMixin = _emberDataHasManyQueryMixinsModel['default'];
  exports.RESTAdapterMixin = _emberDataHasManyQueryMixinsRestAdapter['default'];
  exports.belongsToSticky = _emberDataHasManyQueryBelongsToSticky['default'];
  exports['default'] = relationshipQuery;
});