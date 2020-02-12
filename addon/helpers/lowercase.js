import { helper } from '@ember/component/helper';


export default helper(function lowercase([string]/*, hash*/) {
  if (typeof string !== 'string') {
    throw new TypeError(`You must pass a string to the LOWERCASE helper. You passed a ${typeof string}`);
  }
  return string.toLowerCase();
});

