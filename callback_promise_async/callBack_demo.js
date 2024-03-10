/**
 * OPtion 1: simple function
 * OPtion 2: having the callback function in the main function
 */

function printMsg(msg) {
  console.log("Calling the callback function..");
  console.log(msg);
}

function greet(name, greetFn) {
  console.log("Calling the main function..");
  let msg = `Hello ${name}`;
  greetFn(msg);
}

//OPtion 1: simple function
greet("Rob", printMsg);
console.log();

//OPtion 2: having the callback function in the main function, its an anonymous function here
greet("Gob", function (msg) {
  console.log("Calling the callback function..");
  console.log(msg);
});
console.log();

//OPtion 3: having the callback function as an arrow function in the main function
greet("Bob", (msg) => {
  console.log("Calling the callback function..");
  console.log(msg);
});
console.log();

//Using callback funciton with return statement
function greet2(name, greetFn) {
  console.log("Calling the main function..");
  let msg = `Hello ${name}`;
  return greetFn(msg);
}

//calling the function with return stmt
let res = greet2("Job", (msg) => {
  return `Calling the callback function.. received with  message ${msg}`;
});
console.log(res);
