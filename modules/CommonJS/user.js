/**
 * Common JS format
 * Now we are importing helper js file
 */

const user = require("./helper");
const { greet } = require("./helper"); // this only get the greet function from helper js

//Now we can access helper's properties and funcitons

console.log(user.greet);
console.log(user);

console.log(greet);
