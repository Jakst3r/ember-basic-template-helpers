import { helper } from '@ember/component/helper';

export default helper(function lowercase(params/*, hash*/) {
  return params[0].toLowerCase();
});

