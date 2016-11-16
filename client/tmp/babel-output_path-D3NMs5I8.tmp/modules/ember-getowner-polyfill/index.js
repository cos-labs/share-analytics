import Ember from 'ember';
import FakeOwner from './fake-owner';

var hasGetOwner = !!Ember.getOwner;

export default function (object) {
  var owner = undefined;

  if (hasGetOwner) {
    owner = Ember.getOwner(object);
  }

  if (!owner && object.container) {
    owner = new FakeOwner(object);
  }

  return owner;
}