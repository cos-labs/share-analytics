define('ember-bootstrap/initializers/bootstrap-linkto', ['exports', 'ember', 'ember-bootstrap/mixins/component-child'], function (exports, _ember, _emberBootstrapMixinsComponentChild) {
  'use strict';

  exports.initialize = initialize;

  var LinkComponent = _ember['default'].LinkComponent;

  function initialize() /* application */{
    if (!_emberBootstrapMixinsComponentChild['default'].detect(LinkComponent)) {
      LinkComponent.reopen(_emberBootstrapMixinsComponentChild['default']);
    }
  }

  exports['default'] = {
    name: 'bootstrap-linkto',
    initialize: initialize
  };
});