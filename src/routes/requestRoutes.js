const express = require('express')
const router = express.Router()
const newreq = require("./newrequestRoutes.js");

router.use("/newrequest", newreq)


router.get('/', (req, res) => {
  res.send('dfadf')
})


module.exports = router
