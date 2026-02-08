'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number === undefined) {
      const returnValue = sum;

      sum = 0;

      return returnValue;
    }

    if (typeof number !== 'number') {
      return;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
