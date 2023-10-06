const mongoose = require('mongoose');

const CustomUserItemsSchema = new mongoose.Schema({
	user_id: { type: String, require: true,},
	item_id: { type: Number},
	name: {type: String},
	amount: {type: Number, default: 0},
	emoji: {type: String, default: ":heart:"},




});

const model = mongoose.model("CustomUserItems", CustomUserItemsSchema);

module.exports = model;

