/**
 * just demo of using callback function
 * go to https://www.npmjs.com/package/fetch
 * npm install fetch
 */

const fetchUrl = require("fetch").fetchUrl;

let url = "https://api.github.com/users/github";

fetchUrl(url, (err, meta, body) => {
  console.log(body.toString());
});
