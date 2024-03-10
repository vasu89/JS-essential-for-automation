/**
 *
 */
//Promise { <pending> }
let proObj1 = new Promise((resolve, reject) => {});
console.log(proObj1);

//Simple promise with only resolve
let proObj2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 is resolved and you got data from an API..");
  }, 2000);
});

proObj2.then((res) => {
  console.log(res);
});

//Promise with resolve and reject
let proObj3 = new Promise((resolve, reject) => {
  if (1 > 2) {
    setTimeout(() => {
      resolve("Promise 3 is resolved and you got data from an API..");
    }, 2000);
  } else {
    reject("Error for Promise 3. Promise is rejected..");
  }
});

proObj3
  .then((res) => {
    console.log(res);
    return `${res} Plus updated msg`;
  })
  .catch((err) => {
    console.log(err);
  });

//Chaining the resolve
let proObj4 = new Promise((resolve, reject) => {
  if (1 < 2) {
    setTimeout(() => {
      resolve("Promise 4 is resolved and you got data from an API..");
    }, 2000);
  } else {
    reject("Error for Promise 4. Promise is rejected..");
  }
});

proObj4
  .then((res) => {
    return `${res} Plus updated msg`;
  })
  .then((updatedRes) => {
    console.log(updatedRes);
  })
  .catch((err) => {
    console.log(err);
  });
