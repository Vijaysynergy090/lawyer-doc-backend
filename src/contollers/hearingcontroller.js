const express = require('express');
const router = express.Router();
const { createHearing, getHearings } = require('../../../controllers/hearingController');

router.post('/', createHearing);
router.get('/', getHearings);

module.exports = router;
