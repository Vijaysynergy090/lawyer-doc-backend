const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  profile: {
    firstName: String,
    lastName: String,
    phone: String,
    address: String
  }
});

const caseSchema = new Schema({
  caseNumber: String,
  title: String,
  description: String,
  status: String,
  startDate: Date,
  endDate: Date,
  parties: [
    {
      role: String,
      userId: { type: Schema.Types.ObjectId, ref: 'User' }
    }
  ],
  documents: [{ type: Schema.Types.ObjectId, ref: 'Document' }]
});

const hearingSchema = new Schema({
  caseId: { type: Schema.Types.ObjectId, ref: 'Case' },
  date: Date,
  time: String,
  courtId: { type: Schema.Types.ObjectId, ref: 'Court' },
  participants: [
    {
      userId: { type: Schema.Types.ObjectId, ref: 'User' },
      role: String
    }
  ],
  outcome: String
});

const documentSchema = new Schema({
  caseId: { type: Schema.Types.ObjectId, ref: 'Case' },
  title: String,
  description: String,
  filePath: String,
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  uploadDate: Date
});

const courtSchema = new Schema({
  name: String,
  location: String,
  contact: {
    phone: String,
    email: String
  }
});

const scheduleSchema = new Schema({
  hearingId: { type: Schema.Types.ObjectId, ref: 'Hearing' },
  courtId: { type: Schema.Types.ObjectId, ref: 'Court' },
  date: Date,
  time: String
});

const User = mongoose.model('User', userSchema);
const Case = mongoose.model('Case', caseSchema);
const Hearing = mongoose.model('Hearing', hearingSchema);
const Document = mongoose.model('Document', documentSchema);
const Court = mongoose.model('Court', courtSchema);
const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = { User, Case, Hearing, Document, Court, Schedule };
