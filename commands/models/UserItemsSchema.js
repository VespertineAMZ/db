const mongoose = require('mongoose');

const UserItemsSchema = new mongoose.Schema({
	user_id: { type: String, require: true,},
	item_id: { type: Number},
	name: {type: String},
	amount: {type: Number, default: 0},
	emoji: {type: String, default: ":heart:"},




});

const model = mongoose.model("UserItems", UserItemsSchema);

module.exports = model;

