export { xorHelper };
import truthConvert from '../utils/truth-convert';

function xorHelper(params) {
  return truthConvert(params[0]) !== truthConvert(params[1]);
}