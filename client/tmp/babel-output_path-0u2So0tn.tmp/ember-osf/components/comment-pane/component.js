define('ember-osf/components/comment-pane/component', ['exports', 'ember', 'ember-osf/components/comment-pane/template'], function (exports, _ember, _emberOsfComponentsCommentPaneTemplate) {
  'use strict';

  /**
   * @module ember-osf
   * @submodule components
   */

  /**
   * Display a list of comments, as well as a form to submit new comments.
   * See CommentableMixin for controller actions that can be used with this component.
   *
   * Sample usage:
   * ```handlebars
   * {{comment-pane
   *   comments=comments
   *   addComment=(action 'addComment')
   *   editComment=(action 'editComment')
   *   deleteComment=(action 'deleteComment')
   *   restoreComment=(action 'restoreComment')
   *   reportComment=(action 'reportComment')}}
   * ```
   * @class comment-pane
   * @param {Comment[]} comments An array of comments to be displayed
   * @param {action} addComment
   * @param {action} editComment
   * @param {action} deleteComment
   * @param {action} restoreComment
   * @param {action} reportComment
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberOsfComponentsCommentPaneTemplate['default'],
    comments: null
  });
});