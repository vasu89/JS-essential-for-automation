/**
 * Use parseInt(val) and parseFloat(val) to convert string to number
 * You can use unary operator too --> +val
 * Use .toString() to convert number to string
 */

let val1 = "5" //string
let val2 = "5.5" //string

console.log(`The type for val1 is ${typeof(val1)}`)
console.log(`The type for val2 is ${typeof(val2)}`)

let numval1 = parseInt(val1) //number
let numval2 = parseFloat(val2) //number

console.log(`The type for numval1 is ${typeof(numval1)}`)
console.log(`The type for numval2 is ${typeof(numval2)}`)

//can just put a + in front of a string to convert to a number
let numval3 = +val1
let numval4 = +"3"+3
console.log(`The type for numval3 is ${typeof(numval3)}`)
console.log(numval4)

let val3 = 5
let stringVal = val3.toString(); //string
console.log(`The type for stringVal is ${typeof(stringVal)}`)
