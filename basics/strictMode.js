"use strict"

/**
 * If we add "use strict" at the top of the js file, it will give error if we do not use let
 * Also will give error if we try to use common words like package, implements, interface, public, private etc
 */

a=1
console.log(a) //gives error

let package = "abc"
console.log(package) //gives error