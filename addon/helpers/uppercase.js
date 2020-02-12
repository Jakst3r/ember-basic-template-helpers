import { helper } from '@ember/component/helper';

export function uppercase([string]/*, hash*/) {
  if (typeof string !== 'string') {
    throw new TypeError(`You must pass a string to the UPPERCASE helper. You passed a ${typeof string}`);
  }
  return string.toUpperCase();
}

export default helper(uppercase);
