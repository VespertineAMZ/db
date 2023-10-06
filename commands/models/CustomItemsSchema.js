const mongoose = require('mongoose');

const CustomItemsSchema = new mongoose.Schema({
	name: {type: String, unique: true},
	image: {type: String, default: "none"},
	emoji: {type: String, default: ":heart:"},
	description: {type: String, default: "no description"},
	location: {type: String, default: "TestLocation"},
	extra: {type: String, default: "none"},
	type: {type: String, default: "material"},
	item_id: {type: Number, unique: true},
	ingredient1: {type: String, default: "none"},
	ingredient1amount: {type: Number, default: 1},
	ingredient2: {type: String, default: "none"},
	ingredient2amount: {type: Number, default: 1},
	ingredient3: {type: String, default: "none"},
	ingredient3amount: {type: Number, default: 1},
	ingredient4: {type: String, default: "none"},
	ingredient4amount: {type: Number, default: 1},
	ingredient5: {type: String, default: "none"},
	ingredient5amount: {type: Number, default: 1},

});

const model = mongoose.model("CustomItems", CustomItemsSchema);

module.exports = model;

