
const mongoose = require('mongoose');


const LocationSchema = new mongoose.Schema({
	name: { type: String, require: true, unique: true},
	description: { type: String, default: "none"},
	extra: { type: String, default: "none"},
});

const model = mongoose.model("Locations", LocationSchema);

module.exports = model;
