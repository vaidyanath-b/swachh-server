const express = require('express')
const router = express.Router()
const newreq = require("./newrequestRoutes.js");

router.use("/createnewrequest", newreq)

const Request = require('../models/Request')

router.get('/', (req, res) => {
  res.send('dfadf')
})


module.exports = router
