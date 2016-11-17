define('ember-osf/mixins/infinity-custom', ['exports', 'ember', 'ember-infinity/mixins/route'], function (exports, _ember, _emberInfinityMixinsRoute) {
  'use strict';

  var assign = _ember['default'].assign || _ember['default'].merge;

  /**
   * @module ember-osf
   * @submodule mixins
   */

  /**
   * A custom overlay on ember-infinity that supports loading infinite and paginated relationships
   * For the most part, the API and semantics are identical to ember infinity, except that the means of configuring the store find method is more flexible
   *  (supporting relationship queries that do not operate via store methods)
  
   * @class InfinityCustomMixin
   * @extends Ember.Mixin
   * @uses InfinityRoute
   */
  exports['default'] = _ember['default'].Mixin.create(_emberInfinityMixinsRoute['default'], {
    /**
     * Repurpose an ember-infinity hook to override the method used for queries
     * @property _storeFindMethod
     * @type {function}
     * @default this.store.query
     */
    _storeFindMethod: null,

    /**
     Use the infinityModel method in the place of `this.store.find('model')` to
     initialize the Infinity Model for your route.
      @method infinityModel
     @param {String} modelName The name of the model.
     @param {Object} options Optional, the perPage and startingPage to load from.
     @param {Object} boundParams Optional, any route properties to be included as additional params.
     @return {Promise}
     */
    infinityModel: function infinityModel(modelName, options, boundParams) {
      this.set('_infinityModelName', modelName);

      options = options ? assign({}, options) : {};
      var startingPage = options.startingPage === undefined ? 0 : options.startingPage - 1;

      var perPage = options.perPage || this.get('_perPage');
      var modelPath = options.modelPath || this.get('_modelPath');

      var store = this.get('store');
      // Make storeFindMethod configurable, and default to store.query (with appropriate value of `this`)
      var _storeFindMethod = options._storeFindMethod ? options._storeFindMethod : store.get('query').bind(store);

      delete options.startingPage;
      delete options.perPage;
      delete options.modelPath;
      delete options._storeFindMethod;

      this.setProperties({
        currentPage: startingPage,
        _firstPageLoaded: false,
        _perPage: perPage,
        _modelPath: modelPath,
        _storeFindMethod: _storeFindMethod,
        _extraParams: options
      });

      if (typeof boundParams === 'object') {
        this.set('_boundParams', boundParams);
      }

      return this._loadNextPage();
    },

    /**
     request the next page from the adapter
      @private
     @method _requestNextPage
     @return {Promise} A Promise that resolves the next page of objects
     */
    _requestNextPage: function _requestNextPage() {
      var modelName = this.get('_infinityModelName');
      var nextPage = this.incrementProperty('currentPage');
      var params = this._buildParams(nextPage);

      return this._storeFindMethod(modelName, params).then(this._afterInfinityModel(this));
    }
  });
});