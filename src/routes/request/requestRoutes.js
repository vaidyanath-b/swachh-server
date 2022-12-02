const express = require('express')
const router = express.Router()
const newreq = require("./newrequestRoutes.js");

router.use("/newrequest", newreq)


router.get('/', (req, res) => {
  res.send('dfadf')
})

router.get('/viewallRequests', (req, res) => {
  try {
    const requests = Request.find();
    res.status(200).json({ message: "All requests displayed", requests: requests });
  }
  catch (err) {
    res.status(401).json({ message: "something wrong occured" });
  }
})

module.exports = router
