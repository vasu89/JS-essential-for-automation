//adding 1 value after 4 empty values

let arr = [];
arr[4] = "kiwi";
console.log(arr.length);

//to get actual count of elements present
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i]) count++;
}
console.log(`Actual element count is ${count}`);
