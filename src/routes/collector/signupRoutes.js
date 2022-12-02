const express = require('express');
const router = express.Router();
const Collector = require("../../models/Collector");


router.get('/', (req, res) => {
    res.send("signup works");
})
router.post('/', async (req, res) => {
    try {
        const { username, password, location } = req.body;
        if (!username)
            res.status(401).json({ error: "invalid username" })
        if (!password)
            res.status(401).json({ error: "invalid pasword" })
        if (!location)
            res.status(401).json({ error: "invalid location" })

        const user = await Collector.create({
            username, password, location
        })
        res.status(200).json({
            message: "account created",
            username: user.username

        })
    }
    catch (err) {
        return res.status(500)
            .json({ error: "something went wrong ", message: err.message })
    }
})
module.exports = router;