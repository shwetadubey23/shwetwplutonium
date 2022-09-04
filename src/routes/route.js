const express = require('express');
const router = express.Router();
//const memesController = require("../controllers/memesController")
const userController = require("../controllers/userController")
const auth        =  require("../middlewares/auth")  
router.get("/test", function(req,res){
    res.send("Hello world")
})


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", auth.authenticate, auth.authorized, userController.getUserData)

router.put("/users/:userId", auth.authenticate, auth.authorized, userController.updateUser)

router.delete("/users/:userId", auth.authenticate, auth.authorized, userController.deleteUser)


//router.post("/memes", memesController.postMemes)

module.exports = router;



