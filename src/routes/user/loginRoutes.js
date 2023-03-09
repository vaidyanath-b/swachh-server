const express = require('express');
const router = express.Router();
const login = require('../../controllers/UserAuthController')
router.post('/', login);

module.exports = router;
