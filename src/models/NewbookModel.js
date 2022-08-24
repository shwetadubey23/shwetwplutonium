const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const NewbookSchema = new mongoose.Schema( {
    name    : String,
    authorId: {
      type    : String,
      ref     : "NewAuthor",
    }, 
    price   : Number,
    ratings : Number,
    PublisherId: {
      type    : String,
      ref     : "NewPublisher",  
    },
    isHardCover : {type: Boolean, default: false}
}, { timestamps: true });


module.exports = mongoose.model('newBook', NewbookSchema)
