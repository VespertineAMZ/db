const mongoose = require('mongoose');

const ProfilesSchema = new mongoose.Schema({
	name: { type: String, require: true, unique: true},
	description: { type: String },
	image: { type: String },
	magic: { type: String },
	vitality: { type: String },
	physical: { type: String },
	arcane: { type: String },
	academics: { type: String },
	lore: { type: String },
	blessings: { type: String },
	skills: { type: String },
	reputation: { type: Number },
	experience: { type: Number },
	magical: { type: String },
	physskills: { type: String },
	extra: { type: String },

});

const model = mongoose.model("Profiles", ProfilesSchema);

module.exports = model;

