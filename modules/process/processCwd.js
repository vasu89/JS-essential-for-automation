/**
 * process.cwd - gives us the working directory from where we are issuing the node command
 * __dirname - gives us the dir name of the js file
 */

console.log(process.cwd()); //where node command is passed
console.log(__dirname); //where this file is located

//find the path of the sampledata.json
let jsonPath = `${process.cwd()}/sampleJson.json`;
console.log(`File path for sampleJson is : ${jsonPath}`);
