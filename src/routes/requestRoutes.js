const express = require('express')
const router = express.Router()

const Request = require('../models/Request')

router.get('/', (req, res) => {
  res.send('dfadf')
})

router.post('/', async (req, res) => {
  try {
    const { username, description } = req.body
    const request = await Request.create({
      username,
      description,
    })
    console.log(request)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
