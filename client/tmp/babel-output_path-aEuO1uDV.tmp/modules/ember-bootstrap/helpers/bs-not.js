export { not };
import Ember from 'ember';

function not(params /*, hash*/) {
  return !params[0];
}

export default Ember.Helper.helper(not);