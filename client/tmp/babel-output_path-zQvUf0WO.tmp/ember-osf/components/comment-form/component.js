define('ember-osf/components/comment-form/component', ['exports', 'ember', 'ember-osf/components/comment-form/template'], function (exports, _ember, _emberOsfComponentsCommentFormTemplate) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule components
   */

  /**
   * Allow users to add comments to a page.
   *
   * This component is typically used as part of the `comment-pane` component; see that component for further information.
   * Sample usage:
   * ```handlebars
   * {{comment-form addComment=attrs.addComment}}
   * ```
   *
   * @class comment-form
   * @param {action} addComment The action to fire when adding a new comment to the discussion. Returns a promise.
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberOsfComponentsCommentFormTemplate['default'],
    _commentText: null,

    actions: {
      /**
       * Call a passed-in closure action to handle submitting a comment. Reset the form if save succeeds.
       * @method addComment
       * @param {String} text The text of the comment to create
       */
      addComment: function addComment(text) {
        var _this = this;

        var res = this.attrs.addComment(text);
        res.then(function () {
          return _this.set('_commentText', '');
        });
      }
    }
  });
});