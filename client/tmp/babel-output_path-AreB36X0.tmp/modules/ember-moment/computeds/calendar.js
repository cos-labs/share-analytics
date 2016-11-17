var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

import moment from 'moment';

import computedFactory from './-base';

export default computedFactory(function calendarComputed(params) {
  if (!params || params && params.length > 2) {
    throw new TypeError('ember-moment: Invalid Number of arguments, at most 2');
  }

  var _params = _slicedToArray(params, 2);

  var date = _params[0];
  var referenceTime = _params[1];

  return moment(date).calendar(referenceTime);
});