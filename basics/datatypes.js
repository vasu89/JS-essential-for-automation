/**
 * There are 8 datatypes - 7 primitive and 1 object type
 * string, number, boolean, array, regex, undefined, null and object
 * 
 * array and Object are mutable - can be changed
 * everything else is immutable
 * 
 * There are wrapper classes like String 
 */

//string
let str = "Hello"
let str2 = 'Hello'
let str3 = `${str}, World`

console.log(str3)

//number
let num = 5
let num2 = 5.5

//boolean 
let bool = true

//Object
let obj = {}

//Array
let arr1 = []

//regex
let reg = /abc/

//undefined
let val1 = undefined
//null
let valObj = null

console.log(`The type of str is: ${typeof(str)}`)
console.log(`The type of str 3is: ${typeof(str3)}`)
console.log(`The type of num2 is: ${typeof(num2)}`)
console.log(`The type of bool is: ${typeof(bool)}`)
console.log(`The type of obj is: ${typeof(obj)}`)
console.log(`The type of arr1 is: ${typeof(arr1)}`)
console.log(`The type of reg is: ${typeof(reg)}`)
console.log(`The type of val1 is: ${typeof(val1)}`)
console.log(`The type of valObj is: ${typeof(valObj)}`)


//literals
console.log("is a literal")
//varaible
let s = "is a variable"
console.log(s)
//expression
console.log("is a" + " expression")
console.log(5<10)



