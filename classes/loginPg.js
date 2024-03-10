"use strict";
/**
 * this is the Page object model. loginPage inherits Page class.
 * using getter property here. syntax: get propertyName(){ return somehting} --> this is not a function but a property
 */
const Page = require("./page");

class LoginPage extends Page {
  constructor() {
    super(); //need to have this in order to access parent var and methods
    console.log(`Calling child class..`);
    this.runDt = "2024-03-01";
    console.log(`Run date is updated: ${this.runDt}`);
  }
  //click the login button
  clickLoginBtn() {
    super.clickAnElement("button-id");
  }

  //using getter property
  get anotherLoginBtn() {
    return "diff-button-id";
  }
  //using the getter property here:
  clickDiffLoginBtn() {
    super.clickAnElement(this.anotherLoginBtn);
  }
}

//Object creation
let loginPg = new LoginPage();
loginPg.clickLoginBtn(); //>>> Clicking an element : button-id
loginPg.clickDiffLoginBtn(); //>>> Clicking an element : diff-button-id
