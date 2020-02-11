import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | capitalise', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('Capitalises String', async function (assert) {
    this.set('string', 'test')


    await render(hbs`{{capitalise string}}`);

    assert.equal(this.element.textContent.trim(), 'TEST', `Result was ${this.element.textContent.trim()}`);

  });
});
