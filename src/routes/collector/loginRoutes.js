const express = require('express');
const router = express.Router();
const User = require("../../models/Collector")





router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Collector.findOne({ "username": username });
        console.log(user.username);
        if (!user || !password)
            return res.status(401).json({ error: "invalid username and password" });
        if (user.password == password) {
            res.status(200).json({
                message: "Logged in",
                username: user.username

            })
        }
        else return res.status(401).json({
            message: "invalid password"
        })
    }
    catch (err) {
        return res.status(401).json({ error: err })
    }
});

module.exports = router;
