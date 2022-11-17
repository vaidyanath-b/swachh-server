const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('User works')
})

module.exports = router
