const express = require('express');
const router = express.Router();
const User = require("../../models/User");


router.get('/', (req, res) => {
    res.send("signup works");
})
router.post('/', async (req, res) => {
    try {
        const { username, password, firstName, lastName } = req.body;
        if (!username)
            res.status(401).json({ error: "invalid username" })
        if (!password)
            res.status(200).json({ error: "invalid pasword" })
        if (!firstName)
            res.status(200).json({ error: "invalid firstname" })
        if (!lastName)
            res.status(200).json({ error: "invalid lastname" })

        const user = await User.create({
            username, firstName, lastName, password
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

