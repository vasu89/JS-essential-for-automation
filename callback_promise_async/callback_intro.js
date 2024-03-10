/**
 * Calling 3 functions, but function b has a timer for 2 secs - so function c runs first
 * because javascript is asynchronous - does not wait for a function to complete, goes to the next task
 */

function a() {
  console.log("calling function a...");
}

function b() {
  setTimeout(() => {
    console.log("calling function b...");
  }, 2000);
}

function c() {
  console.log("calling function c...");
}

a();
b();
c();
