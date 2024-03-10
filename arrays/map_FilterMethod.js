/**
 * Here map method for an array is used to modify an existing array and return the modified array
 */

//We want to convert string elements to number
let arr1 = ["123", "456", "789"];
console.log(arr1);

let modifiedArr = arr1.map((ele) => parseInt(ele));
console.log(modifiedArr);

//can use unary operator too
let modifiedArr2 = arr1.map((ele) => +ele);
console.log(modifiedArr2);

/**
 * Here we are using filter method of array to filter out individual items in an array and return modified array
 *
 */
let bookArr = [
  {
    book: "Book1",
    price: 20,
  },
  {
    book: "Book2",
    price: 10,
  },
  {
    book: "Book3",
    price: 50,
  },
];

let arr3 = bookArr.filter((ele) => ele.price > 15);
console.log(arr3);
