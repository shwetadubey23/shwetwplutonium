const BookModel = require("../model/BookModel");
const AuthorModel = require("../model/AuthorModel");

const createBook = async function(req, res){
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send({msg : saveData})
}

const createAuthor = async function(req, res){
  let data    = req.body
  let savedData = await AuthorModel.create(data)
  res.send({msg : savedData})
}

const bookData = async function(req, res){
  let findByAuthor = await AuthorModel.find({author_name: "Chetan Bhagat"})
  let findBook = await BookModel.find({author_id: {$eq: findByAuthor[0].author_id}})
  res.send({msg: findBook})
}

const findAuthor = async function(req, res){
  let bookPrice = await BookModel.findOneAndUpdate({name: "Two states"},{$set: {price: 100}},{new:true})
  let updatePrice = bookPrice.price;
  let authorUpdate = await AuthorModel.find({author_id: {$eq: bookPrice.author_id}}).select({author_name:1, _id:0});
  res.send({msg: authorUpdate, updatePrice});
}

const findBook =async function(req, res){
  let allBook = await BookModel.find({price:{$gte:50, $lte:100}});
  let result = allBook.map(x=>x.author_id);
  let newBooks = await AuthorModel.find({author_id:result}).select({author_name:1, _id:0});
  res.send({msg: newBooks, allBook});
}







module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.bookData = bookData
module.exports.findAuthor = findAuthor
module.exports.findBook = findBook

