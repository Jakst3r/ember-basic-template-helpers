import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | uppercase', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('Put String in Uppercase', async function (assert) {
    this.set('string', 'test')


    await render(hbs`{{uppercase string}}`);

    assert.equal(this.element.textContent.trim(), 'TEST', `Result was ${this.element.textContent.trim()}`);

  });
});
