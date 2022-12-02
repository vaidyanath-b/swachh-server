const express = require('express');
const router = express.Router();
const Request = require('../../models/Request');
const { find } = require('../../models/User');

router.get('/', async (req, res) => {
    try {
        const username = req.body.username;

        if (!username) {
            return res.status(401).json({ error: "invalid username" })
        }
        const history = await Request.find({
            "username": username
        })
        res.status(200).json({ message: "Searched history", reqhistory: history });
    }
    catch (err) {
        res.status(401).json({ error: "Search unsuccesful" });
    }




})
module.exports = router
