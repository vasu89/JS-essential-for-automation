/**
 * Return can be
 */

//1. simple primitive
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(addTwoNumbers(5, 7));

//2. an expression
function addTwoNumbers2(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers2(6, 8));

//3. can be an object type
function addTwoNumbers3(num1, num2) {
  let sum = num1 + num2;
  return { total: sum };
}
console.log(addTwoNumbers3(2, 2)); //{ total: 4 }

//4. can return another function
function addTwoNumbers4(num1, num2) {
  return function () {
    return num1 + num2;
  };
}
//if you just call this funciton, it will return anotehr function:
let total = addTwoNumbers4(2, 2);
console.log(total); //returns this - [Function (anonymous)]
console.log(total()); //this will retuen the actual value

//5. return statment in a conditional exp
function addTwoNumbers5(num1, num2) {
  if (!num1) return; //this means if num1 is undefines etc, it returns control back to the function
  return num1 + num2;
}
console.log(addTwoNumbers5(0, 4)); //this returns as undefined
