const express = require('express');
const router = express.Router();
const User = require("../models/User");


router.get('/', (req, res) => {
    res.send("signup works");
})
router.post('/', async (req, res) => {
    try {
        const { username, password, firstName, lastName } = req.body;

        const user = await User.create({
            username, firstName, lastName, password
        })
        console.log(user);
    }
    catch (err) {
        console.log(err);
    }
})
module.exports = router;

