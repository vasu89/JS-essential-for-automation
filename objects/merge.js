/**
 * Merging 2 objects
 */

let obj1 = {
  a: 5,
  b: 6,
};
let obj2 = {
  c: 7,
  d: 8,
};

//1. Use Object.assign
let merge1 = Object.assign(obj1, obj2);
console.log(merge1);

//2. use Spread operator
let merge2 = {
  ...obj1,
  ...obj2,
};
console.log(merge2);
