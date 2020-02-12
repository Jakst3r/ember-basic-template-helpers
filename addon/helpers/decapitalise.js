import { helper } from '@ember/component/helper';

export default helper(function decapitalise(params/*, hash*/) {
  return params[0].toLowerCase();
});

