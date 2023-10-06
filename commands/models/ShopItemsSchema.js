const mongoose = require('mongoose');

const ShopItemsSchema = new mongoose.Schema({
	name: {type: String, unique: true},
	item_id: {type: String, unique: true},
	emoji: {type: String, default: ":heart:"},
	cost: {type: Number, default: 9999999}, 
	description: {type: String, default: "no description"},

});

const model = mongoose.model("ShopItems", ShopItemsSchema);

module.exports = model;

