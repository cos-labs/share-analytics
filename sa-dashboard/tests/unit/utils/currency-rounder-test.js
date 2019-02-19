import currencyRounder from 'analytics-dashboard/utils/currency-rounder';
import { module, test } from 'qunit';


// Replace this with your real tests.
test('works with billions', function(assert) {
  let rawValue = 180000000123;
  let result = currencyRounder(rawValue);
  assert.equal(result, '180B');
});
