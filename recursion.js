'use strict';

const countSheep= function(sheep) {
  if(sheep===0){
    return  console.log('All sheep jumped over the fence');
  }

  console.log(sheep + ' Another sheep jumps over the fence');
  countSheep(sheep-1);
};

countSheep(3);


