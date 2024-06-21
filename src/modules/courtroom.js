// src/models/courtroom.js

const mongoose = require('mongoose');

const courtroomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true }
});

const Courtroom = mongoose.model('Courtroom', courtroomSchema);

module.exports = Courtroom;
