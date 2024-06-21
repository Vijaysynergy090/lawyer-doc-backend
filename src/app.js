require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const hearingRoutes = require('./routes/hearingRoutes');
const { authenticate } = require('./middlewares/authMiddleware');
const { validateHearing } = require('./middlewares/validationMiddleware');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(express.json());

app.use('/hearings', authenticate, validateHearing, hearingRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Server error', details: err.message });
});

module.exports = app;
