#! this is a hashbank comment


console.log(sum(1,2));

/**
 * Add two numbers
 * @param {*} num1 
 * @param {*} num2 
 * @returns sum of two numbers
 */
function sum(num1, num2){
    return num1 + num2
}

//Hello world
let _greeting ="Hello World!" , greeting1 = "Good Morning!"
console.log(_greeting , greeting1);

//let
let abc = 0;
abc = 10
console.log("the value is ",abc);

//const
const URL = "https://abc.com"
console.log(URL);

// variable scoping - let and const allows to declare local variables ; but not var - value of var will change inside a local block
//We will use let and const because it allows block scoping
let a = 0
if(true){
    let a = 10
    console.log("let - Inside block: ", a); //10
}
console.log("let - Outside block: ", a); //0

var b = 0
if(true){
    var b = 10
    console.log("var - Inside block: ", b); //10
}
console.log("var - Outside block: ", b); //10

const c = 0
if(true){
    const c = 10
    console.log("const - Inside block: ", c); //10
}
console.log("const - Outside block: ", c); //0
