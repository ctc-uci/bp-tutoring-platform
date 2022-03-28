const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userType: { type: String, required: true }, // "STUDENT" | "TUTOR" | "ADMIN"
  email: { type: String, required: true },
  password: { type: String }, // hashed in sha256; set to be required later
  name: { type: String, required: true },
  // more fields later if needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
