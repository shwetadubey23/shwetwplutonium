const { get } = require("../routes/route");

function printDate(){
    const day = new Date ();
    const dd = day.getDate();
    const mm = day.getMonth() +1;
    const yyyy = day.getFullYear();
    console.log("Current Date is -->" , dd,"/",mm,"/",yyyy);
   
}
 printDate()

function printMonth(){
    let month = new Date()
    console.log("Month is ",month.getMonth()+1)

} printMonth()

function getBatchInfo(){
console.log("plutonium, W3D5, the topic being taught today is Nodejs module system")
}
getBatchInfo()

 module.exports.currnetDe = printDate
 module.exports.batch = getBatchInfo
 module.exports.month = printMonth