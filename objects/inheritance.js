/**
 * use constructor method to learn about they type of object
 * use toString method to get details of the object
 */

let obj = {
  a: 7,
};
console.log(obj.constructor);
console.log(obj.toString());

let arr = [];
let re = /abc/;
let val = 0;

console.log(typeof arr); //this just shows as object
console.log(arr.constructor); // this shows as [Function: Array]

console.log(typeof re); //this just shows as object
console.log(re.constructor); // this shows as [Function: RegExp]

console.log(typeof val); //this just shows as Number
console.log(val.constructor); // this shows as [Function: Number]
