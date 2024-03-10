/**
 * Dynamic keys:
 * date
 * local var - runner
 * based on a condition
 */
let testRunner = "local";
let machineID = "m12345";
let env_file = "test_config";

let obj = {
  testID: 12345,
  "Pass/Fail Flag": "Pass",
  totalTC: 100,
  totalPass: 80,
  passrate: function () {
    return (this.totalPass / this.totalTC) * 100;
  },
  dt: new Date(),
  runner: testRunner,
  //below is ternary operator
  machID: machineID ? machineID : "unknown",
  [env_file]: {
    //here it refers to the value assigned to env_file that is test_config
    env: "test",
    url: "https://testurl.com",
  },
  //you can have objects and arrays in an object
  scope: ["smoke", "regression", "e2e"],
  previousRun: {
    status: "Pass",
    runID: 11111,
  },
};

//Access the properties
console.log(obj["Pass/Fail Flag"]);
console.log(obj.dt);
console.log(obj.runner);
console.log(obj.machID);
console.log(obj.test_config);
console.log(obj.test_config.url);

//Access the array and inner obj
console.log(obj.scope[1]);
console.log(obj.previousRun.runID);
console.log(obj["previousRun"]["status"]);

//Can print entire keys or entire values of object
let keys = Object.keys(obj);
console.log(keys);
let val = Object.values(obj);
console.log(val);
