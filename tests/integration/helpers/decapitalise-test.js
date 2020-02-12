import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | decapitalise', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('LowerCaase String', async function (assert) {
    this.set('string', 'TeSTeR')


    await render(hbs`{{decapitalise string}}`);

    assert.equal(this.element.textContent.trim(), 'tester', `Result was ${this.element.textContent.trim()}`);
  });
});
