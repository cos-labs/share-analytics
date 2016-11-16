import Config from 'ember-bootstrap/config';

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
  if (!Config.insertEmberWormholeElementToDom) {
    return;
  }
  var application = arguments[1] || arguments[0];
  var modalContainerElId = 'ember-bootstrap-modal-container';
  appendContainerElement(application.rootElement, modalContainerElId);
}

export default {
  name: 'modals-container',
  initialize: initialize
};