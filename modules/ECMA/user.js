/**
 * ECMA JS format
 * Now we are importing helper js file
 * Need to put "type" : "module" in package.json
 */

// const user = require("./helper");

import data from "./helper.js";

//Now we can access helper's properties and funcitons

console.log(data.greet);
console.log(data);
