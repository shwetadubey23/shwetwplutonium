const mongoose = require("mongoose")
const NewauthorModel = require("../models/NewauthorModel")
const NewbookModel= require("../models/NewbookModel")
const NewpublisherModel = require("../models/NewpublisherModel")

const createBook= async function (req, res) {
    let authorId = req.body.authorId
    let publisherId = req.body.PublisherId
    let isValid  = mongoose.Types.ObjectId.isValid(authorId)
    let isValid2 = mongoose.Types.ObjectId.isValid(publisherId)

    if(isValid === false){
        return res.send("AuthorId is invalid")
    }
      else if(isValid2 === false){
        return res.send("PublisherId is invalid")
      }
    let checkAuthorId = await NewauthorModel.findById(authorId)
    let checkPublisherId = await NewpublisherModel.findById(publisherId)
    if(!checkAuthorId){
      return  res.send("AuthorId is not present")
    }else if(!checkPublisherId){
      return res.send("PublisherId is not present")
    }
    // if(!checkAuthorId && !checkPublisherId){
      //  return res.send("Enter the AuthorId and PublisherId")
    //}
    let book = req.body
    let bookCreated = await NewbookModel.create(book)
    res.send({data: bookCreated})
}


/*
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}
*/
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await NewbookModel.find().populate('authorId').populate("PublisherId")
    res.send({data: specificBook})

}

module.exports.createBook= createBook
//module.exports.getBooksData= getBooksData
module.exports.getBook = getBooksWithAuthorDetails
