const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    name: {type: String, unique: true},
	number: {type: Number, default: 0}
});

const model = mongoose.model("Counter", CounterSchema);

module.exports = model;

