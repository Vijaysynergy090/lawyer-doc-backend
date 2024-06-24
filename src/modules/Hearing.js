const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hearingSchema = new Schema({
  caseNumber: { type: String, required: true },
  date: { type: Date, required: true },
  judge: { type: String, required: true },
  lawyer: { type: String, required: true },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' }
}, { timestamps: true });

module.exports = mongoose.model('Hearing', hearingSchema);
