/**
 * use For in loop to iterate over objects
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
  scope: ["smoke", "regression", "e2e"],
  previousRun: {
    status: "Pass",
    runID: 11111,
  },
};

for (let key in obj) {
  //console.log(`The key is: ${key} and value is: ${obj[key]}`);
  //To avoid the this message we use Json.stringify --> The key is: test_config and value is: [object Object]
  console.log(`The key is: ${key} and value is: ${JSON.stringify(obj[key])}`);
}
