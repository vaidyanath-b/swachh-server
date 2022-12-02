const express = require('express')
const Request = require('../../models/Request')
const router = express.Router()
const newreq = require("./newrequestRoutes.js");

router.use("/newrequest", newreq)


router.get('/', (req, res) => {
  res.send('dfadf')
})

router.get('/viewallRequests', async (req, res) => {
  try {
    const requests = await Request.find();
    return res.status(200).json({ message: "All requests displayed", requests: requests });
  }
  catch (err) {
    res.status(401).json({ error: err });
  }
})

module.exports = router
