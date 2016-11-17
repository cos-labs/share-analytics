import Ember from 'ember';

/**
 * @module ember-osf
 * @submodule mixins
 */

/**
 * Controller mixin to support fetching paginated results
 *
 * Because this uses query parameters, it should be used in tandem with PaginatedRouteMixin
 *
 * @class PaginatedControllerMixin
 * @extends Ember.Mixin
 */
export default Ember.Mixin.create({
    queryParams: ['page', 'page_size'],
    page: 1, // Current page
    page_size: null, // Number of results per page. Param may be omitted.

    totalResults: Ember.computed('model', function () {
        return this.get('model.meta.pagination.total');
    }),
    totalPages: Ember.computed('model', 'totalResults', function () {
        var results = this.get('totalResults');
        var pageSize = this.get('model.meta.pagination.per_page');
        return Math.ceil(results / pageSize);
    }),

    actions: {
        previous: function previous() {
            this.decrementProperty('page', 1);
        },
        next: function next() {
            this.incrementProperty('page', 1);
        },
        goToPage: function goToPage(pageNumber) {
            this.set('page', pageNumber);
        }
    }
});