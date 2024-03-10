/**
 * Objects are mutable.. here we are changing the property and assigning to a new object. It reflects the changes
 * String is not mutable
 */
let obj = {
  status: "PASS",
  scope: ["smoke", "regression", "e2e"],
  previousRun: {
    status: "FAIL",
    runID: 11111,
  },
};

obj.status = "FAIL";
obj.previousRun.status = "PASS";
console.log(obj.status);
console.log(obj.previousRun.status);

let obj2 = obj;
console.log(obj2.status);
console.log(obj2.previousRun.status);
