/**
 * continuation of realTime_callback
 * we are going to latest version of fetch and that is node-fetch
 *  https://www.npmjs.com/package/node-fetch
 * npm install --save-dev node-fetch@2
 */

const fetch = require("node-fetch");

function getAPIData() {
  fetch("https://api.github.com/users/github")
    .then((res) => {
      return res.json();
    })
    .then((updatedRes) => {
      console.log(updatedRes);
    })
    .catch((err) => {
      console.log(err);
    });
}

getAPIData();
