import { helper } from '@ember/component/helper';

export function invertBool(params/*, hash*/) {
  return params[0] === true ? false : true;
}

export default helper(invertBool);
