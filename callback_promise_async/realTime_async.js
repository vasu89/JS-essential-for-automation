"use strict";
const fetch = require("node-fetch");

async function getAPIData() {
  let response = await fetch("https://api.github.com/users/github");
  let data = await response.json();
  console.log(data);
}

getAPIData();
