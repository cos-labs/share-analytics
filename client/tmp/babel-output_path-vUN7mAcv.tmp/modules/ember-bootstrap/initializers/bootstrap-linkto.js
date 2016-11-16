export { initialize };
import Ember from 'ember';
import ComponentChildMixin from 'ember-bootstrap/mixins/component-child';

var LinkComponent = Ember.LinkComponent;

function initialize() /* application */{
  if (!ComponentChildMixin.detect(LinkComponent)) {
    LinkComponent.reopen(ComponentChildMixin);
  }
}

export default {
  name: 'bootstrap-linkto',
  initialize: initialize
};