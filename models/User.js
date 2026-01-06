const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true, index: true },
  phoneNumber: { type: String, default: null },
  name: { type: String, default: null },
  photoURL: { type: String, default: null },
  role: { type: String, default: 'student' },
  createdAt: { type: Date, default: Date.now },
  lastSeen: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
