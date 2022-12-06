const express = require('express');
const router = express.Router();
const serverequest = require('../../controllers/serverequestcontroller');
router.use('/', serverequest)
module.exports = router;
