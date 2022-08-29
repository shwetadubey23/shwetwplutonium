const mongoose = require("mongoose")
const ProductModel = require("../models/ProductModel")


const createProduct = async function(req, res){
   let Product = req.body
   let productCreated = await ProductModel.create(Product)
   res.send({data: productCreated})
}



 module.exports.createProduct = createProduct



