define('moment/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var ComparableMoment = _ember['default'].Object.extend(_ember['default'].Comparable, moment.fn, {
    compare: function compare(a, b) {
      if (moment.isMoment(a) && moment.isMoment(b) && a.isBefore(b)) {
        return -1;
      } else if (moment.isMoment(a) && moment.isMoment(b) && a.isAfter(b)) {
        return 1;
      } else if (moment.isMoment(a) && !moment.isMoment(b)) {
        return 1;
      } else if (moment.isMoment(b)) {
        return -1;
      }

      return 0;
    }
  });

  var comparableMoment = function comparableMoment() {
    return ComparableMoment.create(moment.apply(this, arguments));
  };

  for (var momentProp in moment) {
    if (moment.hasOwnProperty(momentProp)) {
      comparableMoment[momentProp] = moment[momentProp];
    }
  }

  // Wrap global moment methods that return a full moment object
  ['utc', 'unix'].forEach(function (method) {
    comparableMoment[method] = function () {
      return ComparableMoment.create(moment[method].apply(this, arguments));
    };
  });

  ComparableMoment.reopen({
    clone: function clone() {
      return comparableMoment(this);
    }
  });

  exports['default'] = comparableMoment;
});