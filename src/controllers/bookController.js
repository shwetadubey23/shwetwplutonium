const mongoose = require("mongoose")
const NewauthorModel = require("../models/NewauthorModel")
const NewbookModel= require("../models/NewbookModel")
const NewpublisherModel = require("../models/NewpublisherModel")

const createBook= async function (req, res) {
   let book = req.body
   let bookCreated = await NewbookModel.create(book)
   res.send({data: bookCreated})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await NewbookModel.find().populate('authorId').populate("PublisherId")
    res.send({data: specificBook})

}

const getUpdatePublisher = async function(req,res){
  let PublisherUpdate = req.body.NewPublisher
   let PublisherData = await NewpublisherModel.find({name: ["Penguin","HarperCpllins"]}).select({_id:1})
   let BookDataUpdate = await NewbookModel.updateMany({NewPublisher:PublisherData},
    {$set:{isHardCover:true,new:true}},{upsert:true})
  res.send({data:BookDataUpdate})
   }

 const  UpdateAuthorRating= async function(req, res){
   let AuthorUpdate = req.body.NewAuthor
   let authorData = await NewauthorModel.findById({AuthorUpdate:{$set:{rating:{$gt: 3.5}}}}).select({_id:1})
   
   .updateMany({price: AuthorUpdate},{$inc:{price:10}},{new:true})
   res.send({data:authorData})
  }

  

module.exports.createBook= createBook
module.exports.getBooksData= getUpdatePublisher
module.exports.getUpdateAuthor = UpdateAuthorRating
module.exports.UpdatePublisher = getUpdatePublisher

