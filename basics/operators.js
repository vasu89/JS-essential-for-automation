/**
 * = --> assignment operator
 * Comparison operator
 * == !=   --> only compares the value
 * === !==  --> Strict Equality operator - compares value and datatype
 */

let a = 1
let b = 1
let c = "1"

console.log(a == b)     //true
console.log( a === b)   //true

console.log(a == c)     //true
console.log(a === c)       //false

/**
 * Logical operators - && || !
 */
let val1 = "Monday"
if(typeof(val1) === "string" && val1.length > 1 ){
    console.log(`Given value ${val1} is of type string`)
}else{
    console.log(`Given value ${val1} is NOT of type string`)
}

let day = "Sunday"
if(day === "Saturday" || day === "Sunday"){
    console.log(`Given day ${day} is weekend`)
}else{
    console.log(`Given day ${day} is NOT weekend`)
}

/** IMPORTANT
 * Logical operator OR default value
 * if there is no value assigned to the left side, the default value will be the right side of the || operator
*/
let targetBrowser
let browser = targetBrowser || "chrome"
console.log(browser)        //here targetBrowser is undefined or can be assigned null, so browser will take "chrome"

let targetBrowser2 = "firefox"
let browser2 = targetBrowser2 || "chrome"
console.log(browser2)        //here browser2 will take "firefox"

// we can use ! to check if rhere is a value or its undefined, null, "", NaN, 0 etc
let firstName = undefined
if(!firstName){
    console.log(`Given firstname ${firstName} is not valid`)
}

/**
 * Ternary expression
 * <expression> ? : "val1" : "val2"
 */
//Basic
let runner = "local"
let logLevel = runner === "local" ? "Info" : "Error"
console.log(logLevel)

//Advanced
let runner2 = "cloud"
let logLevel2 = runner2 === "local" ? "Info" : runner2 === "cloud"? "Silent" : "Error"
console.log(logLevel2)