const BookModel = require("../model/BookModel");

const
 createBook = async function(req, res){
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send({msg : saveData})
}

const bookList = async function(req, res){
    let saveData = await BookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({msg : saveData})
}

const getBookInYear= async function (req, res){
    let newYear = req.query.year
    let saveData = await BookModel.find({year: newYear})
    res.send({msg: saveData})
}


const particularBooks = async function(req, res){
   let allBooks = await BookModel.find()
   res.send({msg: allBooks})
}

const bookPrice = async function (req, res){
   let givenPrice = await BookModel.find({"prices.indianPrice": {$in : ["100INR","200INR","500INR" ]}})
   res.send({msg: givenPrice})
}

const randomBooks = async function (req, res){
  let anyBook = await BookModel.find({$or: [{stockAvailable: true}, {Pages:{$gt:500}}]}) 
  res.send({msg: anyBook})
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.bookInYear = getBookInYear
module.exports.getParticularBooks = particularBooks
module.exports.getPrice = bookPrice
module.exports.randomBooks = randomBooks