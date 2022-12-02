const express = require('express');
const router = express.Router();
const history = require("./history")

const login = require('./loginRoutes');
const signup = require('./signupRoutes');

router.use('/login', login);
router.use('/signup', signup);
router.use('/history', history);

router.get('/', (req, res) => {
  res.send('User works')
})


module.exports = router;
