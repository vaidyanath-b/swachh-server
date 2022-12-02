const express = require('express');
const router = express.Router();
const User = require("../models/User")




router.get('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ "username": username });
  console.log(user.username);
  if (!user) {
    console.log("invalid");

  }
  else if (user.password == password) {
    console.log("correct password")
  }
  else console.log("wrong");
});

module.exports = router;
