/**
 * Arrow function or fat arrow function
 * its a shorter version of functiona expression
 * syntax:
 *   () => {}
 * => - always present
 * () - num of params, if 0 or more, it needs to be there. If only 1 param - then it can be skipped
 * {} - one or more stmts, can be skipped if only 1 stmt
 * return - can be skipped if no return
 * used in callback context
 */

//1. usual syntax
let sum = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};

let total = sum(2, 2);
console.log(total);

//2. no params , only one stmt - no need {}
let bool = () => 10 > 5;
console.log(bool());

//3. one param
let greet = (name) => console.log(`Hello ${name}`);
greet("Rob");

/**
 * For each for arrays is a arrow function
 */
let windows = ["Google", "Amazon", "Youtube"];
windows.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});
