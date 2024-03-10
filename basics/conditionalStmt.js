/**
 * if else
 */
let val1 = "rror"
if(val1 === "error"){
    console.log("error")
}else if(val1 === "no error"){
    console.log("no error")
}else console.log("default")

/**
 * switch - case break default break
 */
let browser = ""

switch(browser){
    case "chrome": 
        console.log("Running chrome browser")
        break
    case "firefox": 
        console.log("Running firefox browser")
        break
    case "edge": 
        console.log("Running edge browser")
        break
    default:
        console.log("No browser")
        break
}