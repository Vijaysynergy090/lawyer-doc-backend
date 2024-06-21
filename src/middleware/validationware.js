const { body, validationResult } = require('express-validator');

exports.validateHearing = [
  body('caseNumber').notEmpty().withMessage('Case number is required'),
  body('date').isISO8601().toDate().withMessage('Valid date is required'),
  body('judge').notEmpty().withMessage('Judge name is required'),
  body('participants').isArray({ min: 1 }).withMessage('Participants are required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
