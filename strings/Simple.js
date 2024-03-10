let str = "Hello World";

console.log(str.length);
console.log(str.charAt(3));

/**
 * Different ways of declaring a string
 */
let str1 = "Hello World";
let str2 = "Hello World";
let str3 = `Hello World`; //preffered - called template literal
let str4 = String("Hello World");

if (str1 === str4) console.log(true);

//We use template literal to combine static and dynamic strings
let accNum = 1234;
let name = "Ram";
let date = "2024-03-01";
let emailSub = `The account ending with ${accNum} for ${name} on date ${date}`;
console.log(emailSub);
