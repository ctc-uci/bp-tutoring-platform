const mongoose = require('mongoose');

const timeslotSchema = new mongoose.Schema({
  timeslots: { type: Array, requried: true},
  email: { type: String, required: true},
});

const Timeslot = mongoose.model('Timeslot', timeslotSchema);

module.exports = Timeslot;

