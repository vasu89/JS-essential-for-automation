/**
 * Named functions
 * return is optional
 * datatypes are not mentioned
 */

function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(addTwoNumbers(2, 4)); //6
console.log(addTwoNumbers("two", "four")); //twofour
console.log(addTwoNumbers(2, 4, 6, 8)); //6
console.log(addTwoNumbers(2)); //NaN
console.log(addTwoNumbers()); //NaN

function clickAButton(element) {
  console.log(`clicking ${element}`);
}

clickAButton("button1");
