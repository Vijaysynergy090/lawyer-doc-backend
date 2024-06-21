const express = require('express');
const hearingController = require('../../../controllers/hearingController');

const router = express.Router();

router.post('/', hearingController.createHearing);
router.put('/:id', hearingController.updateHearing);
router.get('/', hearingController.getHearings);

module.exports = router;
