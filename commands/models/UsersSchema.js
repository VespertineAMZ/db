const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
	user_id: { type: String, require: true, unique: true},
	balance: { type: Number, default: 0},
});

const model = mongoose.model("Users", UsersSchema);

module.exports = model;

