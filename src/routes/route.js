const express = require('express');
const router = express.Router();

 const UserController= require("../controllers/UserController")
 const ProductController= require("../controllers/ProductController")
 const OrderController = require("../controllers/OrderController")
 const commonMW = require("../controllers/middlewares/commonMiddlewares")

router.post("/createUaer", commonMW.Middle1, UserController.createUser)
router.post("/createProduct", ProductController.createProduct)
router.post("/createOrder", commonMW.Middle1, OrderController.createOrder)



module.exports = router;

// const mid1 = function(req, res, next){
//     console.log("hi I am a middleware named Mid1")
//     //logic
//     let loggedIn = false
//     if (loggedIn== true){
//         console.log("ok you Logged is True Now")
//         next()
//     }
//     else{
//         res.send("Please login or register")
//     }
// }

// router.get("/basicRoute", commonMW.mid1, commonMW.mid2,commonMW.mid3,UserController.basicCode)




