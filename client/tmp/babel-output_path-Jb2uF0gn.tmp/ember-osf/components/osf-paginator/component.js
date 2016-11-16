define('ember-osf/components/osf-paginator/component', ['exports', 'ember', 'ember-osf/components/osf-paginator/template'], function (exports, _ember, _emberOsfComponentsOsfPaginatorTemplate) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * OSF Paginator adapted from osf/website/static/js/paginator.js
     *
     * Sample usage:
     * ```handlebars
     * {{osf-paginator
     *   totalSearchResults=totalSearchResults
     *   fetchResults=(action 'fetchResults')
     *   query=query}}
     * ```
     * @class osf-paginator
     * @param {integer} totalSearchResults Number of total search results to be paginated
     * @param {action} fetchResults - action for fetching other pages of results
     * @param {string} query - Query needed for fetchResults action.
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsOsfPaginatorTemplate['default'],
        currentPage: 1,
        pages: _ember['default'].computed('totalSearchResults', function () {
            var totalSearchResults = this.get('totalSearchResults');
            return Math.ceil(totalSearchResults / 10);
        }),
        paginators: _ember['default'].computed('currentPage', 'pages', function () {
            var currentPage = this.get('currentPage') - 1;
            var MAX_PAGES_ON_PAGINATOR = 7;
            var MAX_PAGES_ON_PAGINATOR_SIDE = 5;
            var pages = this.get('pages');
            var paginator = _ember['default'].A();

            if (pages > 1) {
                paginator.pushObject('<');
                paginator.pushObject(1);
            }

            if (pages <= MAX_PAGES_ON_PAGINATOR) {
                for (var i = 1; i < pages - 1; i++) {
                    paginator.pushObject(i + 1);
                }
            } else if (currentPage < MAX_PAGES_ON_PAGINATOR_SIDE - 1) {
                for (var j = 1; j < MAX_PAGES_ON_PAGINATOR_SIDE; j++) {
                    paginator.pushObject(j + 1);
                }
                paginator.pushObject('...');
            } else if (currentPage > pages - MAX_PAGES_ON_PAGINATOR_SIDE) {
                paginator.pushObject('...');
                for (var k = pages - MAX_PAGES_ON_PAGINATOR_SIDE; k < pages - 1; k++) {
                    paginator.pushObject(k + 1);
                }
            } else {
                paginator.pushObject('...');
                for (var l = currentPage - 1; l <= currentPage + 1; l++) {
                    paginator.pushObject(l + 1);
                }
                paginator.pushObject('...');
            }

            paginator.push(pages);
            paginator.push('>');
            return paginator;
        }),
        actions: {
            findResults: function findResults(query, page) {
                var _this = this;

                this.attrs.fetchResults(query, page).then(function () {
                    _this.set('currentPage', page);
                });
            },
            nextPage: function nextPage(query) {
                var page = this.get('currentPage');
                if (page < this.get('pages')) {
                    this.send('findResults', query, page + 1);
                }
            },
            previousPage: function previousPage(query) {
                var page = this.get('currentPage');
                if (page > 1) {
                    this.send('findResults', query, page - 1);
                }
            }
        }
    });
});