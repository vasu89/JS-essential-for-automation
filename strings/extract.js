/**
 * extract using slice(beginindex, endindex)
 * replace --> there is no replaceAll, we need to use regexp /exp/g to select all occurences
 * split - split into arrays
 * indexof - returns the index of the char or string
 */

let str = "2024-03-01";

console.log("year is " + str.slice(0, 4));
console.log("month is " + str.slice(5, 7));
console.log("date is " + str.slice(-2));

console.log("date without dashes " + str.replace(/-/g, ""));

let dateAndTime = "2024-03-02T10:51:51";
console.log(dateAndTime.split("T"));

let fileName = "invoice_123.pdf";
let fileNameWithoutExt = fileName.split(".");
console.log(fileNameWithoutExt[0]);

let app = "Application number {12345} submitted";
let start = app.indexOf("{");
let end = app.indexOf("}");
console.log(app.slice(start + 1, end));
