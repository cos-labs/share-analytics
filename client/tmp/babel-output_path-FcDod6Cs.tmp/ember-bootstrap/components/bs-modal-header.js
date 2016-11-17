define('ember-bootstrap/components/bs-modal-header', ['exports', 'ember', 'ember-bootstrap/mixins/modal-closer'], function (exports, _ember, _emberBootstrapMixinsModalCloser) {
  'use strict';

  /**
  
   Modal header element used within [Components.Modal](Components.Modal.html) components. See there for examples.
  
   @class ModalHeader
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsModalCloser['default'], {
    classNames: ['modal-header'],

    /**
     * Show a close button (x icon)
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * The title to display in the modal header
     *
     * @property title
     * @type string
     * @default null
     * @public
     */
    title: null

  });
});