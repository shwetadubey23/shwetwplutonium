const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
     req.loggedInUser = decodedToken.userId
    next()
}


const authorized = function(req, res, next){
   //logic here
   // comapre the logged in user's id and the id in request
   let requestedUserId = req.params.userId
   if(requestedUserId !== req.loggedInUesr)
   return res.send({status: false, msg: "access denied"})
   next()
}

module.exports.authenticate = authenticate
module.exports.authorized = authorized