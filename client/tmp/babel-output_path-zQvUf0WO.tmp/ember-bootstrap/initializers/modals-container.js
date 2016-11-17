define('ember-bootstrap/initializers/modals-container', ['exports', 'ember-bootstrap/config'], function (exports, _emberBootstrapConfig) {
  'use strict';

  /*globals document */
  var hasDOM = typeof document !== 'undefined';

  function appendContainerElement(rootElementId, id) {
    if (!hasDOM) {
      return;
    }

    var rootEl = document.querySelector(rootElementId);
    var modalContainerEl = document.createElement('div');
    modalContainerEl.id = id;
    rootEl.appendChild(modalContainerEl);
  }

  function initialize() {
    if (!_emberBootstrapConfig['default'].insertEmberWormholeElementToDom) {
      return;
    }
    var application = arguments[1] || arguments[0];
    var modalContainerElId = 'ember-bootstrap-modal-container';
    appendContainerElement(application.rootElement, modalContainerElId);
  }

  exports['default'] = {
    name: 'modals-container',
    initialize: initialize
  };
});