/**
 * Functions can have parameters
 * 1. default param
 * 2. passing undefined or falsy param
 * 3. passing objects as params
 */

//1. default param
function greeting(name, greet = "Hello") {
  console.log(`${greet}, ${name}`);
}

greeting("Rob");
greeting("John", "Hi");

//2. passing undefined or falsy parameters
function fullName(fnm, mnm, lnm) {
  if (mnm) {
    console.log(`Hi ${fnm} ${mnm} ${lnm}`);
  } else {
    console.log(`Hi ${fnm} ${lnm}`);
  }
}

fullName("John", "", "Doe");

//3. passing object as paramenter
function fullName2(personobj) {
  console.log(`Hi ${personobj.fnm} ${personobj.lnm}`);
}

fullName2({
  fnm: "Rob",
  lnm: "Kim",
});
