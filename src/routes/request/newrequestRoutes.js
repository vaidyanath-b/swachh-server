const express = require('express');
const router = express.Router();
const Request = require('../../models/Request')
const PublicRequest = require('../../models/PublicRequest')


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
router.post('/public', async (req, res) => {
    try {
        const { username, description, location } = req.body;

        const publicRequest = await PublicRequest.create({
            username, description, location
        })
        res.status(200).json({ message: "request created" })

    }
    catch (err) {
        res.status(404).json({ error: "Something went wrong" });
    }
}
)
module.exports = router;