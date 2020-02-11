import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';


import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | invert-bool', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('Boolean Is Inverted ', async function (assert) {

    this.set('boolean', true);

    await render(hbs`{{invert-bool boolean}}`);

    assert.equal(this.element.textContent.trim(), 'false');
  });
});
