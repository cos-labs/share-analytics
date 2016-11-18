define('ember-osf/components/pagination-control/component', ['exports', 'ember', 'ember-osf/components/pagination-control/template'], function (exports, _ember, _emberOsfComponentsPaginationControlTemplate) {
    'use strict';

    var _slice = Array.prototype.slice;

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * Display a simple pagination control that advances the page. Intended for use with PaginatedRouteMixin.
     * @class pagination-control
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsPaginationControlTemplate['default'],
        currentPage: null,
        pageCount: null,

        // Bounds checking for control buttons
        disablePageReverse: _ember['default'].computed.lte('currentPage', 1),
        disablePageForward: _ember['default'].computed('currentPage', 'pageCount', function () {
            return this.get('currentPage') >= this.get('pageCount');
        }),

        // TODO: This actions hash feels a bit kludgy
        actions: {
            next: function next() {
                return this.sendAction.apply(this, ['next'].concat(_slice.call(arguments)));
            },

            previous: function previous() {
                return this.sendAction.apply(this, ['previous'].concat(_slice.call(arguments)));
            },

            goToPage: function goToPage(pageNumber) {
                return this.sendAction('goToPage', pageNumber);
            }
        }
    });
});