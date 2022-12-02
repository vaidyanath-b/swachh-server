const express = require('express');
const router = express.Router();
const User = require("../../models/User")





router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ "username": username });
    console.log(user.username);
    if (!user || !password)
      return res.status(401).json({ error: "invalid username and password" });
    if (user.password == password) {
      res.status(200).json({
        message: "Logged in",
        username: user.username
      })
    }
  }
  catch (err) {
    return res.status(200).json({ error: err })
  }
});

module.exports = router;
