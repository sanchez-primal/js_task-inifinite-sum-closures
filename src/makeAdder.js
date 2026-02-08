'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (number) => {
    // I like it better
    if (typeof number === 'number') {
      sum += number;

      return adder;
    }

    if (number !== undefined) {
      return;
    }

    const returnValue = sum;

    sum = 0;

    return returnValue;
  };

  return adder;
}

module.exports = makeAdder;
