const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  //console.log(newAtribute);
  res.status(201).send({ msg: savedData });
}
  catch (err){
   // console.log("This is the Error:", err)
    res.status(400).send( err)
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
   return res.status(400).send({
     status: false, msg: "username or the password is not correct" });
    
  // Once the login is successfull, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret(This is basically a fixed value only set at the server. This value should be hard to guess )
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FUnctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  //res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
}
  catch(error){
    res.status(401).send({"Somthing missing" : error})
  }
};

const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
}
  catch(err){
    //console.log("worng details :", err)
    res.status(404).send({"worng details": err})
  }
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser = async function(req, res) {    
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if(!user) {
      return res.send({status: false, message: "no such user exists"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  res.send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser




// const UserModel = require("../models/UserModel")

// const createUser = async function (req, res) {
//     let User = req.body
//     //let userheaders = req.headers.isFreeAppUser
//     //console.log(userheaders)
//     // let resHeader = res.headers.isFreeAppUser
//     // console.log(resHeader)
//     let userCreated = await UserModel.create(User)
//     res.send({data: userCreated})
// }

// module.exports.createUser = createUser
