/**
 * Rest parameter - you can add many parameters by adding   ...<parameter>
 * this will represent arguments in an array
 * can access the array argument like this arguments[i]
 * has length property
 */

//add many numbers
let total = 0;
function summation(...numN) {
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(summation(1, 2, 3, 4, 5));
console.log(summation(10));
