/**
 * These are the falsy values
 * false
 * 0
 * undefined
 * null
 * NaN - not a number
 * ""
 * 
 * {} and [] are NOT falsy values
 *  
 * In a numerical context 
 * undefined - NaN
 * null - 0 
 */

let val1 = false
bool(val1)
let val2 = 0
bool(val2)
let val3 = undefined
bool(val3)
let val4 = null
bool(val4)
let val5 = NaN
bool(val5)
let val6 = ""
bool(val6)
let val7 = {}
bool(val7)
let val8 = []
bool(val8)

function bool(val){
    if(val){
        console.log("Condition met ..")
    }else{
        console.log(`Given ${val} is a falsy value..`)
    }
}

let val9 = 5 + undefined
console.log(val9)

let val10 = 5 + null // null is taken as 0
console.log(val10)