import { module, test } from 'qunit';

import { setupTest } from 'task/tests/helpers';

module('Unit | Adapter | flightdata', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:flightdata');
    assert.ok(adapter);
  });
});
