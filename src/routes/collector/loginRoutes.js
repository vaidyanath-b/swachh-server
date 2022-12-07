const express = require('express');
const router = express.Router();
const login = require('../../controllers/AuthController').login




router.post('/', login);

module.exports = router;
