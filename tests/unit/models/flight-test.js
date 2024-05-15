import { module, test } from 'qunit';

import { setupTest } from 'task/tests/helpers';

module('Unit | Model | flight', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('flight', {});
    assert.ok(model);
  });
});
