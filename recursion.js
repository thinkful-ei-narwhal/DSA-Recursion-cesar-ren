'use strict';

const countSheep = function (sheep) {
  if (sheep === 0) {
    return console.log('All sheep jumped over the fence');
  }

  console.log(sheep + ' Another sheep jumps over the fence');
  countSheep(sheep - 1);
};

countSheep(3);

const powerCalculator = function (base, exponent) {
  if (exponent < 0) {
    return 'exponent should >= 0';
  }
  if (exponent === 0) {
    return 1;
  }
  return base * powerCalculator(base, exponent - 1);
};

console.log(powerCalculator(10, 2));
