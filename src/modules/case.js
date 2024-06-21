// src/models/case.js

const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  caseNumber: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, required: true, enum: ['open', 'closed', 'pending'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  hearings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hearing' }]
});

const Case = mongoose.model('Case', caseSchema);

module.exports = Case;
