/**
 * for
 * use spread operator for merge
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

//get prices
for (let i = 0; i < bookArr.length; i++) {
  let price = bookArr[i].price;
  console.log(price);
}
//store the prices in an array
let priceArr = [];
for (let i = 0; i < bookArr.length; i++) {
  priceArr.push(bookArr[i].price);
}

console.log(priceArr);

//Merge
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = [...arr1, ...arr2];
console.log(arr);
