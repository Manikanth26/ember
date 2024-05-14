import { module, test } from 'qunit';
import { setupTest } from 'task/tests/helpers';

module('Unit | Route | enterData', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:enter-data');
    assert.ok(route);
  });
});
