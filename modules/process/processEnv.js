/**
 * Process is a global object.. we can set custom variables by using
 * export VARNAME = VAL && node filename.js --> to set the global variable and run the file
 * We are going to set a TARGET = DEV. IN this file we are accessing that value and printing it
 * We can set the env variable art global level by adding it to package.json under scripts
 */

//console.log(process); //gives huge output, all are key value pair

//console.log(process.env);
console.log(process.env.TARGET); //use this or below
console.log(process.env["TARGET"]); //DEV
