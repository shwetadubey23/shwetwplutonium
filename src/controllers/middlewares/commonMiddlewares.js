

const Middle1 = function(req, res, next){
    let updateHeader = req.headers.isfreeappuser
    console.log(updateHeader)
    if(!updateHeader){
        res.send('isFreeAppUser field mandetry')
    }else{
        next()
    }
}


module.exports.Middle1 = Middle1
// const mid1= function(req, res, next){
//     console.log("Hi it's 1st Middleware named mid1")
//     next()
// }

// const mid2 = function(req, res,next){
//     console.log("Hi it's 2nd Middleware named mid2")
//     next()
// }

// const mid3 = function(req,res,next){
//     console.log(" Hi it's 3rd Middleware named mid3")
//     next()
// }

// module.exports.mid1 = mid1
// module.exports.mid2 = mid2
// module.exports.mid3 = mid3