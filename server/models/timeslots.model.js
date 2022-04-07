const mongoose = require('mongoose');

const timeslotSchema = new mongoose.Schema({
  possibleTimes: { type: Array, requried: true},
  userEmail: { type: String, required: true},
});

const Timeslot = mongoose.model('Timeslot', timeslotSchema);

module.exports = Timeslot;

