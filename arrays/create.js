/**
 * Arrays
 * ordered collection
 * mutable
 * key is index, values is the actual value
 * iterate by using for each loop
 *
 * How to create arrays
 * 1. literal
 * 2. constructor
 * 3. object creation using new keyword
 *
 * To add more elements
 * 1. use index
 * 2. use push method
 */

let arr = [1, 2, 3, 4, 5];

console.log(arr[2]);
//below this shows that internally array is stored as a key value pair and here we are giving the key as 2
console.log(arr["2"]);
console.log(arr.constructor);

let arr1 = ["apple", "mango", "strawberry"];
console.log(arr1);
console.log(`Single element: ${arr1[1]}`);

let arr2 = Array("apple", "mango", "strawberry");
console.log(arr2);
console.log(`Single element: ${arr2[1]}`);

let arr3 = new Array("apple", "mango", "strawberry");
console.log(arr3);
console.log(`Single element: ${arr3[1]}`);

//Add more
arr3[3] = "banana";
arr3.push("kiwi");
console.log(arr3);
console.log(arr3.length);
