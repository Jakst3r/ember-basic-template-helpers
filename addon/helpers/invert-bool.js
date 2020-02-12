import { helper } from '@ember/component/helper';

export function invertBool([bool]/*, hash*/) {
  if (typeof bool !== "boolean") {
    throw new TypeError(`You must pass a boolean to the INVERT-BOOL helper. You passed a ${typeof bool}`);
  }
  return bool === true ? false : true;
}

export default helper(invertBool);
