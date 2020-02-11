import { helper } from '@ember/component/helper';

export function capitalise(params/*, hash*/) {
  return params[0].toUpperCase();
}

export default helper(capitalise);
