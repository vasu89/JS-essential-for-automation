/**
 * standard for
 * we also have while, do while ( its the usual)
 */
let arr1 = ["apple", "grape", "orange", 10, 20, 30];
let sum = 0;
for (let i = 0; i <= arr1.length; i++) {
  if (typeof arr1[i] === "number") {
    sum += arr1[i];
  }
}
console.log(`Sum of numbers in the arr is ${sum}`);

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

/**
 * For each
 */
let windows = ["Google", "Amazon", "Youtube"];
// this is a arrow function
// () => {}
windows.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});

/**
 * for in --> object
 * for of --> array
 */
//Here we are declaring an object. An object has a key and value pair
let obj = {
  a: 10,
  b: 20,
  c: 30,
};

for (let key in obj) {
  console.log(key); //print the key
  console.log(obj[key]); //prints the value
}

let windows2 = ["Google", "Amazon", "Youtube"];

for (let tab of windows2) {
  console.log(tab);
}
