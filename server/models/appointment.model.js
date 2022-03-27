const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  tutor_id: {type: String, required: true},
  student_id: {type: String, required: true},
  start_time: {type: Date, required: true},
  end_time: {type: Date, required: true},
  note: {type: String},
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
