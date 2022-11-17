const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Login works')
})

module.exports = router
