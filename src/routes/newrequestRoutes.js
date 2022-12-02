const express = require('express');
const router = express.Router();
const Request = require('../models/Request')


router.post('/', async (req, res) => {
    try {
        const { username, description, typeofwaste } = req.body
        const request = await Request.create({
            username,
            description,
            typeofwaste
        })
        console.log(request)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;