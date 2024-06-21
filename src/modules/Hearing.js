const mongoose = require('mongoose');

const hearingSchema = new mongoose.Schema({
  caseNumber: { type: String, required: true },
  date: { type: Date, required: true },
  judge: { type: String, required: true },
  participants: [{ type: String, required: true }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Hearing', hearingSchema);
