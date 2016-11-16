export { andHelper };
import truthConvert from '../utils/truth-convert';

function andHelper(params) {
  for (var i = 0, len = params.length; i < len; i++) {
    if (truthConvert(params[i]) === false) {
      return params[i];
    }
  }
  return params[params.length - 1];
}