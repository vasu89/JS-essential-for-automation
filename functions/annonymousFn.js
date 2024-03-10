/**
 * Annonymous functions or Function expression
 * 1. Function without name, and is assigned to a variable
 * 2. Function with name, and is assigned to a variable
 */

//no name on function
let sum1 = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

console.log(sum1(4, 5));
console.log(typeof sum1);

//function with name, that name cannot be accessed
let sum2 = function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

console.log(sum2(2, 5));
console.log(typeof sum2);
