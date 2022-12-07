const express = require('express');
const router = express.Router();
const history = require('../../controllers/historyController')
router.get('/', history);
module.exports = router
