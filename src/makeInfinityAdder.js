'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const sumFunction = (number) => {
    if (typeof number !== 'number') {
      const returnValue = sum;

      sum = 0;

      return returnValue;
    }

    sum += number;

    return sumFunction;
  };

  return sumFunction;
}

module.exports = makeInfinityAdder;
