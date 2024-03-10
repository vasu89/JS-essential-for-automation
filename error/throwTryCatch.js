const fs = require("fs");

let fileName = `${process.cwd()}/samleJson.json`;

try {
  let data = fs.readFileSync(fileName);
  let dataObj = JSON.parse(data); //save as json object
  console.log(dataObj);
} catch (error) {
  let customErr = `Error reading the ${fileName}. ${error}`;
  throw customErr;
}

// if (!bool) {
//   throw Error(`Given file does not exist ${fileName}`);
// }
