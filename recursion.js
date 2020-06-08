'use strict';

//1. Counting Sheep
const countSheep = function (sheep) {
  if (sheep === 0) {
    return console.log('All sheep jumped over the fence');
  }

  console.log(sheep + ' Another sheep jumps over the fence');
  countSheep(sheep - 1);
};

countSheep(3);

//2. Power Calculator
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

//3. Reverse String
const reverseString= function(word) {
  if(word===''){
    return  '';
  }
  return word.charAt(word.length-1)+ reverseString(word.slice(0,-1));
};

console.log(reverseString('the world'));

//4. nth Triangular Number
const tringularNumber = function (base, exponent) {

};
  
console.log(tringularNumber());