import Ember from 'ember';

var proxyGenerator = function proxyGenerator(name) {
  return function () {
    var msg = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var title = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    window.toastr[name](msg.toString(), title.toString(), options);
  };
};

export default Ember.Service.extend({
  success: proxyGenerator('success'),
  info: proxyGenerator('info'),
  warning: proxyGenerator('warning'),
  error: proxyGenerator('error'),

  clear: function clear() {
    window.toastr.clear();
  },

  remove: function remove() {
    window.toastr.remove();
  }
});