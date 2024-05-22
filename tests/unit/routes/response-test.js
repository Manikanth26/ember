import { module, test } from 'qunit';
import { setupTest } from 'task/tests/helpers';
import {resolve} from 'rsvp';

module('Unit | Route | response', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:response');
    assert.ok(route);
  });
  test("should fetch flight record by id",async function (assert){
    let store = this.owner.lookup('service:store');
    let mockFlightData = {
      id:1,
      fromLocation:"Hyderabad",
      toLocation:"Chennai",
      date:"20-05-2024",
      time:"10:00"
    }
    store.findRecord = ()=> resolve(mockFlightData);

    let route = this.owner.lookup('route:response');
    let params = {id:1};
    let result = await route.model(params);

    assert.equal(result,mockFlightData);
    assert.ok(store);
  })
});
