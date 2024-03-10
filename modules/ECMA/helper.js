/**
 * Common JS format
 * SImple helper class with var, obj, functions - we are exporting it.
 */

function greet() {
  return "Hello from greet";
}

let var1 = "Welcome";

let obj = {
  a: 1,
  b: 2,
};

// Now we are setting the exports as above its empty
export default {
  greet,
  var1,
};
