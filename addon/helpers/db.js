import {
  helper
} from '@ember/component/helper';
import {
  debug
} from '@ember/debug'

export function db(params /*, hash*/) {
  /* eslint-disable */
  console.defaultDebug = console.debug.bind(console);
  console.debugs = [];
  console.debug = function () {
    // default &  console.debug()
    console.defaultDebug.apply(console, arguments);
    // new & array data
    console.debugs.push(Array.from(arguments));
  }
  /* eslint-enable */

  params.forEach(i => debug(i))

}

export default helper(db);
