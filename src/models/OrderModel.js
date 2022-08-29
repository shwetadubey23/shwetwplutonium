const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema( {
  userId: {type: String, ref:"NewUser"},
	productId: {type: String, ref: 'Product'},
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String
 
}, { timestamps: true });


module.exports = mongoose.model('Order', OrderSchema)
