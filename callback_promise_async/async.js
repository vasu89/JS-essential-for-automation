//Promise
let proObj = new Promise((resolve, reject) => {
  if (1 < 2) {
    setTimeout(() => {
      resolve("Promise1 is resolved and you got data from an API..");
    }, 2000);
  } else {
    reject("Error for Promise1. Promise is rejected..");
  }
});

//using async and await to reolve the promise
async function getData() {
  let res = await proObj;
  console.log(res);
}

//calling the async function
getData();

//For errors
let proObj2 = new Promise((resolve, reject) => {
  if (1 > 2) {
    setTimeout(() => {
      resolve("Promise2 is resolved and you got data from an API..");
    }, 2000);
  } else {
    reject("Error for Promise2. Promise is rejected..");
  }
});

//using async and await to reolve the promise
async function getData2() {
  try {
    let res = await proObj2;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

//calling the async function
getData2();
