/**
 * Arrays can have
 * 1. different datatypes
 * 2. objects in an array
 * 3. Arrays in an array
 */

let arr1 = [1, "two", true];
console.log(arr1);
console.log(arr1.length);

let arr2 = [
  {
    name: "Rob",
    age: 44,
  },
  {
    name: "Bob",
    age: 55,
  },
];
console.log(arr2);
console.log(arr2.length);
//access the age of object 2
console.log(arr2[1].age);

let arr3 = [
  [1, 2, 3],
  ["one", "two", "three"],
];
console.log(arr3);
console.log(arr3.length);
//access inner arrays
console.log(arr3[1][2]);
