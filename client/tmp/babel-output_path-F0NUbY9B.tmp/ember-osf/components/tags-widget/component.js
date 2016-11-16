define('ember-osf/components/tags-widget/component', ['exports', 'ember', 'ember-osf/components/tags-widget/template'], function (exports, _ember, _emberOsfComponentsTagsWidgetTemplate) {
    'use strict';

    /**
     * @module ember-osf
     * @submodule components
     */

    /**
     * Allow the user to view and manage tags.
     * See TaggableMixin for controller actions that can be used with this component.
     *
     * For more information on configuration options, see documentation for [jquery-tags-input](https://github.com/xoxco/jQuery-Tags-Input).
     *
     * ```handlebars
     * {{tags-widget
     *   addATag=(action 'addATag' model)
     *   removeATag=(action 'removeATag' model)
     *   tags=model.tags}}
     * ```
     * @class tags-widget
     * @extends Ember.Component
     */
    exports['default'] = _ember['default'].Component.extend({
        layout: _emberOsfComponentsTagsWidgetTemplate['default'],

        /**
         * Whether the user is allowed to edit tags.
         * @property canEdit
         * @type {Boolean}
         */
        canEdit: true, // TODO: Implement editing decision logic in the future
        tags: [],

        tagName: 'input',
        type: 'text',
        attributeBindings: ['name', 'type', 'value', 'id'],

        _initialize: _ember['default'].on('didInsertElement', function () {
            _ember['default'].run.scheduleOnce('afterRender', this, function () {
                var _this = this;

                this.$().tagsInput({
                    width: '100%',
                    interactive: this.get('canEdit'),
                    maxChars: 128,
                    onAddTag: function onAddTag(tag) {
                        _this.send('addATag', tag);
                    },
                    onRemoveTag: function onRemoveTag(tag) {
                        _this.send('removeATag', tag);
                    }
                });
            });
        }),

        didRender: function didRender() {
            // Rerender the list of tags whenever the node model changes. Useful if node.tags is not defined when page loads.
            // Provide a default value in case tags weren't defined when component first rendered
            var tags = this.get('tags') || [];
            // Reset & replace existing tag list with new items
            this.$().importTags(tags.join(', '));
        },

        actions: {
            addATag: function addATag(tag) {
                // Calls a curried closure action which was provided the model
                this.attrs.addATag(tag);
            },
            removeATag: function removeATag(tag) {
                // Don't try to delete a blank tag (would result in a server error)
                if (!tag) {
                    return false;
                }
                this.attrs.removeATag(tag);
            }
        }
    });
});