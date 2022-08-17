const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    bookName : {type : String, required : true},
    authorName : String,
    prices   : {
       indianPrice : String,
       euroPrice :  String
      },
  tags :  [String],
  year : {type : Number, defalt: 2021},
   Pages : Number,
  stockAvailable : Boolean,
}, 
   {timestamps : true});

   module.exports = mongoose.model('Book', bookSchema)