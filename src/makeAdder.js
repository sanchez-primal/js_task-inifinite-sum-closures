'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (number) => {
    if (typeof number !== 'number') {
      const returnValue = sum;

      sum = 0;

      return returnValue;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
