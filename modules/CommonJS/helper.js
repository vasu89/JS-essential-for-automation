/**
 * Common JS format
 * SImple helper class with var, obj, functions - we are exporting it.
 */

function greet() {
  return "Hello from greet";
}

let var1 = "Welcome";

let obj = {
  a: 1,
  b: 2,
};

//console.log(module);
// above gives this:
/**
 * {
  id: '.',
  path: '/Users/vasudha/vscode-workspace/js-essential-for-automation/modules',
  exports: {},
  filename: '/Users/vasudha/vscode-workspace/js-essential-for-automation/modules/helper.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/vasudha/vscode-workspace/js-essential-for-automation/modules/node_modules',
    '/Users/vasudha/vscode-workspace/js-essential-for-automation/node_modules',
    '/Users/vasudha/vscode-workspace/node_modules',
    '/Users/vasudha/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]}
 */

// Now we are setting the exports as above its empty
module.exports = {
  greet,
  var1,
};
//console.log(module);
// we can see this now
//exports: { greet: [Function: greet], var1: 'Welcome' },
