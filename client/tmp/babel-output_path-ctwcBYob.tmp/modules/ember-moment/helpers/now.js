import BaseHelper from './-base';

export default BaseHelper.extend({
  compute: function compute() {
    this._super.apply(this, arguments);

    return new Date();
  }
});