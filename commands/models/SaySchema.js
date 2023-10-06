const mongoose = require('mongoose');

const SaySchema = new mongoose.Schema({
	title: { type: String, require: true, unique: true},
	name: { type: String },
	image: { type: String },
	color: { type: String },
});

const model = mongoose.model("Says", SaySchema);

module.exports = model;

