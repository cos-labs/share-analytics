define('ember-bootstrap/mixins/modal-closer', ['exports', 'ember', 'ember-bootstrap/components/bs-modal'], function (exports, _ember, _emberBootstrapComponentsBsModal) {
  'use strict';

  /**
   * @class ModalCloser
   * @namespace Mixins
   * @private
   */
  exports['default'] = _ember['default'].Mixin.create({
    targetObject: _ember['default'].computed(function () {
      return this.nearestOfType(_emberBootstrapComponentsBsModal['default']);
    }).volatile(),

    action: 'close',

    actions: {
      close: function close() {
        this.sendAction();
      }
    }
  });
});