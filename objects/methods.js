/**
 * can create methods for an object
 * 1. anon method
 * 2. arrow function
 * 3. method without a key
 */

// 1. anon method
let obj = {
  testID: 12345,
  "Pass/Fail Flag": "Pass",
  totalTC: 100,
  totalPass: 80,
  passrate: function () {
    return (this.totalPass / this.totalTC) * 100;
  },
};

console.log(obj.passrate());

//2. Arrow function - here it will be NaN as arrow function does not do binding to this keyword ***!!!
let obj2 = {
  testID: 12345,
  "Pass/Fail Flag": "Pass",
  totalTC: 100,
  totalPass: 80,
  passrate: () => {
    return (this.totalPass / this.totalTC) * 100;
  },
};

console.log(obj2.passrate());

//3. method without a key
let obj3 = {
  testID: 12345,
  "Pass/Fail Flag": "Pass",
  totalTC: 100,
  totalPass: 80,
  passrate() {
    return (this.totalPass / this.totalTC) * 100;
  },
};

console.log(obj3.passrate());
