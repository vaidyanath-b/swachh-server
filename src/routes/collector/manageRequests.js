const express = require('express');
const router = express.Router();
const manageRequest = require('../../controllers/ManagerequestController');

router.get('/viewRequest', manageRequest);
module.exports = router;