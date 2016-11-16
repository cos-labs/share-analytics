export { notHelper };
import truthConvert from '../utils/truth-convert';

function notHelper(params) {
  for (var i = 0, len = params.length; i < len; i++) {
    if (truthConvert(params[i]) === true) {
      return false;
    }
  }
  return true;
}