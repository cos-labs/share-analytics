define('ember-data-has-many-query/mixins/rest-adapter', ['exports', 'ember', 'ember-data-has-many-query/property-names'], function (exports, _ember, _emberDataHasManyQueryPropertyNames) {
  'use strict';

  var evaluateFunctions = function evaluateFunctions(object, record) {
    if (_ember['default'].isArray(object)) {
      object.forEach(function (element) {
        if (typeof element === 'object') {
          evaluateFunctions(element, record);
        }
      });
    } else if (!_ember['default'].isNone(object)) {
      Object.keys(object).forEach(function (key) {
        if (!object.hasOwnProperty(key)) {
          return;
        }
        var value = object[key];
        if (typeof value === 'function') {
          object[key] = value.apply(record);
        } else if (typeof value === 'object') {
          evaluateFunctions(value, record);
        }
      });
    }
  };

  /**
   * Mixin for DS.RESTAdapter.
   */
  exports['default'] = _ember['default'].Mixin.create({
    findHasMany: function findHasMany(store, snapshot, url, relationship) {
      var id = snapshot.id;
      var type = snapshot.modelName;

      url = this.urlPrefix(url, this.buildURL(type, id, null, 'findHasMany'));
      var query = this.buildRelationshipQuery(snapshot, relationship);

      var options = { data: query };
      snapshot.record.set((0, _emberDataHasManyQueryPropertyNames.ajaxOptionsPropertyName)(relationship.key), options);
      return this.ajax(url, 'GET', options);
    },
    findBelongsTo: function findBelongsTo(store, snapshot, url, relationship) {
      var id = snapshot.id;
      var type = snapshot.modelName;

      url = this.urlPrefix(url, this.buildURL(type, id, null, 'findBelongsTo'));
      var query = this.buildRelationshipQuery(snapshot, relationship);

      var options = { data: query };
      snapshot.record.set((0, _emberDataHasManyQueryPropertyNames.ajaxOptionsPropertyName)(relationship.key), options);
      return this.ajax(url, 'GET', options);
    },
    buildRelationshipQuery: function buildRelationshipQuery(snapshot, relationship) {
      var data = {};

      //add query parameters from the model mixin's query function
      var queryParams = snapshot.record.get((0, _emberDataHasManyQueryPropertyNames.queryParamPropertyName)(relationship.key));
      if (!_ember['default'].isEmpty(queryParams)) {
        data = jQuery.extend(true, data, queryParams);
      }

      //add query parameters defined in the model itself by the 'parameters' option
      var relationshipParams = relationship.options.parameters;
      if (!_ember['default'].isEmpty(relationshipParams)) {
        data = jQuery.extend(true, data, relationshipParams);
      }

      //replace any functions in the data with their return value
      evaluateFunctions(data, snapshot.record);
      return data;
    },
    ajaxOptions: function ajaxOptions() {
      var ajaxOptions = this._super.apply(this, arguments);
      var defaultBeforeSend = ajaxOptions.beforeSend || function () {};
      ajaxOptions.beforeSend = function (jqXHR) {
        defaultBeforeSend.apply(undefined, arguments);
        //store the jqXHR in the options object, which in turn is stored in the model itself, so the model mixin can abort it
        ajaxOptions.jqXHR = jqXHR;
      };
      return ajaxOptions;
    }
  });
});