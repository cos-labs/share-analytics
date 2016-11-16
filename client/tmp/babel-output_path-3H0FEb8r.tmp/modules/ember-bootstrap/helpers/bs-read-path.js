export { readPath };
import Ember from 'ember';

function readPath(params /*, hash*/) {
  return Ember.get(params[0], params[1]);
}

export default Ember.Helper.helper(readPath);