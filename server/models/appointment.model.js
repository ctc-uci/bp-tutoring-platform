const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  //tutorEmail: { type: String, required: true },
  //studentEmail: { type: String, required: true },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  note: { type: String },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
