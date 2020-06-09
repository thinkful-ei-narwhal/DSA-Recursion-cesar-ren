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
const reverseString = function (word) {
  if (word === '') {
    return '';
  }
  return word.charAt(word.length - 1) + reverseString(word.slice(0, -1));
};

console.log(reverseString('the world'));

//4. nth Triangular Number
const tringularNumber = function (num) {
  if (num <= 1) {
    return num;
  }

  return num + tringularNumber(num - 1);
};

console.log(tringularNumber(3));

//5. String Splitter
const stringSplit = function (str, val = '') {
  if (str === '') {
    return [val];
  }
  if (str[0] === '/') {
    return [val, ...stringSplit(str.slice(1), (val = ''))];
  }
  val += str[0];
  return [...stringSplit(str.slice(1), val)];
};

console.log(stringSplit('02/20/2020'));

//6. Fibonacci
const Fibonacci = function (num) {
  if (num <= 1) {
    return num;
  }

  return Fibonacci(num - 2) + Fibonacci(num - 1);
};
console.log(Fibonacci(7));

//7. Factorial

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));


//12. Binary Representation
const binaryRepresentation = function (num) {
  if(num<=0){
    return '';
  }
  
  return binaryRepresentation(Math.floor(num/2))+`${num%2}`;
};
console.log(binaryRepresentation(75));


//10. Anagrams
const Anagrams = function (word) {
  if (word.length < 2) {
    return word;
  }

  let arr = [];

  for(let i=0; i <word.length; i++){
    let pre= word[i];
    let sub=word.substring(i+1, word.length)+word.substring(0,i);
    for (let permutation of Anagrams(sub)) {
      arr.push(pre + permutation);
    }
  }
  return arr;
};

console.log(Anagrams('east'));


//8.Find a way out of the maze
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

const exitMaze = function (maze, row, colum, direction, path) {
  if(!processing){
    return;
  }
  if (maze.length===0){
    console.log('no maze given');
  }
  
  path += direction;

  if (row === maze.length || colum=== maze[0].length) {
    return;
  }

  if (row<0 || colum<0){
    return;
  }

  if (maze[row][colum]==='e'){
    console.log('path is '+path);
    processing=false;
  }

  if (maze[row][colum] === ' ') {
    maze[row][colum]='r';
    exitMaze(maze,row+1,colum,'D', path);
    exitMaze(maze,row,colum+1,'R', path);
    exitMaze(maze,row-1,colum,'U', path);
    exitMaze(maze,row,colum-1,'L', path);
  }

};  


//9. Find ALL the ways out of the maze
const exitsMaze = function (maze, row, colum, direction, path) {
  if (maze.length===0){
    console.log('no maze given');
  }
  
  path += direction;

  if (row === maze.length || colum=== maze[0].length) {
    return;
  }

  if (row<0 || colum<0){
    return;
  }

  if (maze[row][colum]==='e'){
    console.log('path is '+path);
  }

  if (maze[row][colum] === ' ') {
    maze[row][colum]='r';
    exitsMaze(maze,row+1,colum,'D', path);
    exitsMaze(maze,row,colum+1,'R', path);
    exitsMaze(maze,row-1,colum,'U', path);
    exitsMaze(maze,row,colum-1,'L', path);
  }

};  

let processing= true;
exitMaze(mySmallMaze, 0 ,0, '','');
exitsMaze(maze, 0 ,0, '','');



