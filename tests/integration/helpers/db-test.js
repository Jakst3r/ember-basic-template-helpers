import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { db } from 'ember-basic-template-helpers/helpers/db'


module('Integration | Helper | db', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('Prints to console', async function (assert) {
    this.set('strings', ["A Debug message", "A second Debug Message"])

    db(this.get('strings'))
    //eslint-disable-next-line
    this.set('count', console.debugs.length)
    //eslint-disable-next-line
    assert.equal(this.get('count'), 2, `Console.debugs array length was 2 -  entries were ${console.debugs}`)
  });
});
