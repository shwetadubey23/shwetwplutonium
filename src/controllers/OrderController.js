const ProductModel = require("../models/ProductModel")
const UserModel = require("../models/UserModel")

const OrderModel = require("../models/OrderModel")

const createOrder = async function (req, res){
    let order = req.body
    let userId = order.userId
    let productId = order.productId
    if(!userId){
    return res.send({msg: 'UserId is mandatory'})
    }else if (!productId){
        return res.send('please enter valid productId ProductId is mabdatory')
    }
    let UserId = await UserModel.findById(userId)
    let ProductId = await ProductModel.findById(productId)
     if(!UserId){
        return res.send("User Id not found in user data")
     }else if (!ProductId){
        return res.send("Product Id not found in Product data")
     }else {}
     
     let HeadersData = req.headers.isfreeappuser
     let value = 0 //if FreeAppUser is true
     if(HeadersData == 'true'){
        order.amount = value
        order.isfreeappuser = HeadersData
        let orderCreated = await OrderModel.create(order)
        res.send({msg: orderCreated})
     }else if 
     (UserId.balance >=ProductId.price){
        await UserModel.findOneAndUpdate({_id:UserId},
        {$set: {balence: UserId.balance - ProductId.price}})
        order['amount'] = ProductId.price;
        order['isFreeAppUser'] = req.headers.isfreeappuser;
        let orderCreated = await OrderModel.create(order)
        res.send({msg: orderCreated})
     }else {
        res.send("Insufficient Balance.")
     }
}

module.exports.createOrder = createOrder
// const createOrder = async function(req, res){
//     let order = req.body
//     let freeAppuser = req.headers.isfreeappuser
//     let userData = await UserModel.findById({_id: order.userId})
//      if(!userData)
//       return res.send({status: false, msg: "userId is invalid"})
//     let productData = await ProductModel.findById({_id: order.prodctId})
//      if(!productData)
//       return res.send({status: false, msg: "ProductId is invalid"})
//      if (freeAppuser == "false"){
//         if(userData.balance>= order.amount){
//             let orderCreated = await OrderModele.create(order)
//             let update = await UserModel.updateOne({_id: userData},{$inc: {balance: -order.amount}})
//             let update2 = await UserModel.updateOne({_id:userData},{$set:{isFreeAppUser: freeAppuser}})
//              return res.send({msg:orderCreated})
//         }else if (userData.balance<= order.amount){
//             return res.send({status: true, msg: "the user doesn't have enough balance"})
//         }
//      }else if (freeAppuser == "true"){
            
//      }

    
//     let orderCreated = await OrderModele.create(order)
//     res.send({msg: orderCreated})
// }





