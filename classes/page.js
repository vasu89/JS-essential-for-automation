"use strict";

/**
 * Create a simple page class with reusable methods
 */

class Page {
  //below is the class variable; need not set it here
  runDt;
  //in constructor we are using runDt
  constructor() {
    console.log(`Calling parent class..`);
    this.runDt = "";
  }

  //Reusable methods
  navigateToUrl(url) {
    console.log(`>>> Navigating to url: ${url}`);
  }

  clickAnElement(ele) {
    console.log(`>>> Clicking an element : ${ele}`);
  }
}

module.exports = Page;
