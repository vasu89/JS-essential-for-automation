/**
 * we can invoke the function in the declaration itself
 * surround with brackets, provide the arguments
 */

(function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  return sum;
})(2, 2);
