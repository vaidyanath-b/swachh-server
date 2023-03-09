const express = require('express')
const Request = require('../../models/Request')
const router = express.Router()
const newreq = require("./newrequestRoutes.js");
const verifyUser = require("../../middlewares/authJWT");

router.use("/newrequest", newreq)

router.get('/', (req, res) => {
  res.send('dfadf')
})

router.get('/viewallRequests', verifyUser, async (req, res) => {
  try {
    if (!req.user) return res.status(399).json({ message: "invalid json token" })

    if (req.user.username == 'admin') {
      const requests = await Request.find();
      return res.status(200).json({ message: "All requests displayed", requests: requests });
    }
    else return res.status(400).json({ message: "Access denied" })
  }
  catch (err) {
    return res.status(401).json({ error: err });
  }
})

module.exports = router
