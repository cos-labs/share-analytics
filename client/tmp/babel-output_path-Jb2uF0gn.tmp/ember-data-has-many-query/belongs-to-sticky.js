define('ember-data-has-many-query/belongs-to-sticky', ['exports', 'ember', 'ember-data', 'ember-data-has-many-query/property-names'], function (exports, _ember, _emberData, _emberDataHasManyQueryPropertyNames) {
  'use strict';

  var _slice = Array.prototype.slice;

  var recordHasId = function recordHasId(record) {
    return record && record.get('id');
  };

  /**
   * Create an extension to the `DS.belongsTo` computed property that returns a cached
   * record if the current associated belongsTo record doesn't have an id.
   *
   * This may be useful if querying a hasMany relationship multiple times and storing
   * the results, as each query will reset the ManyArray and therefore remove the inverse
   * belongsTo association. Defining a relationship as `belongsToSticky` will keep the
   * associated record even if it is removed from the ManyArray.
   *
   * @returns {Ember.computed} relationship
   */
  var belongsToSticky = function belongsToSticky() {
    var computed = _emberData['default'].belongsTo.apply(_emberData['default'], arguments);
    var meta = computed.meta();
    meta.sticky = true;
    return _ember['default'].computed({
      get: function get(key) {
        var _computed$_getter;

        var value = (_computed$_getter = computed._getter).call.apply(_computed$_getter, [this].concat(_slice.call(arguments)));
        if (recordHasId(value)) {
          return value;
        }
        return this.get((0, _emberDataHasManyQueryPropertyNames.stickyPropertyName)(key)) || value;
      },
      set: function set(key) {
        var _computed$_setter;

        this.set((0, _emberDataHasManyQueryPropertyNames.stickyPropertyName)(key), undefined);
        return (_computed$_setter = computed._setter).call.apply(_computed$_setter, [this].concat(_slice.call(arguments)));
      }
    }).meta(meta);
  };

  exports.recordHasId = recordHasId;
  exports['default'] = belongsToSticky;
});