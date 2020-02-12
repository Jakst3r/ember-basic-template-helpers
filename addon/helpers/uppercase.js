import { helper } from '@ember/component/helper';

export function uppercase(params/*, hash*/) {
  return params[0].toUpperCase();
}

export default helper(uppercase);
