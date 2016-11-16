import Ember from 'ember';
import BaseAuthenticator from './base';

var RSVP = Ember.RSVP;

export default BaseAuthenticator.extend({
  restore: function restore(data) {
    return RSVP.resolve(data);
  },

  authenticate: function authenticate(data) {
    return RSVP.resolve(data);
  },

  invalidate: function invalidate() {
    return RSVP.resolve();
  }
});