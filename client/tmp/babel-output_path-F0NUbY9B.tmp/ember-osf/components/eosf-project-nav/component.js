define('ember-osf/components/eosf-project-nav/component', ['exports', 'ember', 'ember-data', 'ember-osf/components/eosf-project-nav/template', 'ember-osf/const/permissions'], function (exports, _ember, _emberData, _emberOsfComponentsEosfProjectNavTemplate, _emberOsfConstPermissions) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * Project header navigation bar, with links to various sub-pages within a project
     * Sample usage:
     * ```handlebars
     * {{eosf-project-nav
     *   node=node
     *   user=user}}
     * ```
     * @class eosf-project-nav
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsEosfProjectNavTemplate['default'],
        node: null,
        user: null,

        projectLabel: _ember['default'].computed('node.category', function () {
            var category = this.get('node.category');
            return category === 'project' ? 'Project' : 'Component';
        }),

        isProjectContributor: _ember['default'].computed('user', 'node', function () {
            // Is the user a contributor on this node? (returns false if the user is not logged in)
            var node = this.get('node');
            var userID = this.get('user.id');

            return _emberData['default'].PromiseObject.create({
                promise: node.isContributor(userID)
            });
        }),

        /**
         * If this is a withdrawn registration, hide a block of buttons.
         * @property isWithdrawnRegistration
         */
        isWithdrawnRegistration: _ember['default'].computed.and('node.isRegistration', 'node.withdrawn'),

        parentExists: _ember['default'].computed('node', function () {
            // Determine if a parent exists (field not empty), without trying to fetch it.
            // This provides a way to use conditionals without errors that hang the page
            var node = this.get('node');
            return !!node.belongsTo('parent').link();
        }),
        showParentProjectLink: _ember['default'].computed('node.parent', function () {
            // TODO: Rewrite this to rely on embeds, which are more efficient
            // If the parent node is not visible to the contributor, it will be identified in the API response, but not accessible.
            // Only show the parent link if the relationship resolves to a successful response.
            var parent = this.get('node.parent');
            if (parent) {
                // Report whether the parent relationship request failed.
                var response = parent.then(function () {
                    return true;
                })['catch'](function () {
                    return false;
                });
                return _emberData['default'].PromiseObject.create({
                    promise: response
                });
            }
            // If no parent, don't show parent link.
            return false;
        }),
        showAnalyticsTab: _ember['default'].computed.or('node.public', 'isProjectContributor'),
        showRegistrationsTab: _ember['default'].computed('node.isRegistration', 'node.isAnonymous', function () {
            // Do not show registrations tab for view-only links
            return !this.get('node.isRegistration') && !this.get('node.isAnonymous');
        }),
        showForksTab: _ember['default'].computed.not('node.isAnonymous'),
        showContributorsTab: _ember['default'].computed.alias('isProjectContributor'),
        showSettingsTab: _ember['default'].computed('node', function () {
            var node = this.get('node');
            if (node.get('isProject')) {
                return node.get('currentUserPermissions').indexOf(_emberOsfConstPermissions['default'].WRITE) !== -1;
            } else if (node.get('isRegistration')) {
                return node.get('currentUserPermissions').indexOf(_emberOsfConstPermissions['default'].ADMIN) !== -1;
            }
            return false; // No idea what this resource is, so don't show tab
        }),

        showCommentsButton: _ember['default'].computed('node', function () {
            // TODO: Implement. Depends on resolution of https://openscience.atlassian.net/browse/OSF-6701
            // <!--% if user['can_comment'] or node['has_comments']:-->
            return false;
        })
    });
});