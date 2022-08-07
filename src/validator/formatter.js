function trimString(){
 let myName = "  Shweta Dubey    "
    console.log(myName.trim())
    
}
  trimString()

function lowerString(){
    console.log("SHWETA DUBEY".toLowerCase())
    
}lowerString()

function upperString(){
    console.log("shweta dubey".toUpperCase())
    
}upperString()

module.exports.trim = trimString
module.exports.lower = lowerString
module.exports.upper = upperString