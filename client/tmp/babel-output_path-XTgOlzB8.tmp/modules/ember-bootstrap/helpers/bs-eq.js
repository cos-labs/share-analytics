export { eq };
import Ember from 'ember';

function eq(params) {
  return params[0] === params[1];
}

export default Ember.Helper.helper(eq);