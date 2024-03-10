/**
 * Operations on a folder - you need to import fs
 * 1. existSync - check if dir exists
 * 2. mkdirSync
 * 3. rmdirSync
 * 4. readdirSync
 *
 * Read data in a file and print to console:
 * fs.readFileSync(filename, "utf-8")
 *
 * Write into file
 * let data = JSON.stringify(err, undefined, 4); --> to format the json
 * fs.writeFileSync(filePath, data)
 *
 * Delete file
 * fs.unlinkSync()
 *
 * To store console output to a file in command line
 * node filename.js > output.txt
 *
 */

const fs = require("fs");

let reportExists = fs.existsSync(`${process.cwd()}/allure-reports`);
let resultExists = fs.existsSync(`${process.cwd()}/screenshots`);

console.log(`Report folder exists? ${reportExists}`);
console.log(`Result folder exists? ${resultExists}`);

if (reportExists) {
  fs.rmdirSync(`${process.cwd()}/allure-reports`);
}

if (!reportExists) {
  fs.mkdirSync(`${process.cwd()}/allure-reports`);
}

let classesFolder = fs.readdirSync(`${process.cwd()}/classes`);
console.log(classesFolder);

//read file and print to console
let fileName = `${process.cwd()}/sampleJson.json`;
console.log(fs.readFileSync(fileName, "utf8"));

//write into file
let err = {
  testID: "12345",
  status: "Pass",
};
let data = JSON.stringify(err, undefined, 4);
let reportName = `${process.cwd()}/reportStatusJson.json`;

fs.writeFileSync(reportName, data);

//this deletes the file
//fs.unlinkSync(reportName);
