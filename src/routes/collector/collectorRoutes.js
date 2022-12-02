const express = require('express');
const router = express.Router();
const manage = require("./manageRequests")

const login = require('./loginRoutes');
const signup = require('./signupRoutes');

router.use('/login', login);
router.use('/signup', signup);
router.use('/manage', manage);

router.get('/', (req, res) => {
    res.send('User works')
})


module.exports = router;