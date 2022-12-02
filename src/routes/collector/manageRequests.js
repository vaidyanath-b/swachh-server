const express = require('express');
const router = express.Router();
const Request = require("../../models/Request");
const Collector = require("../../models/Collector");

router.get('/viewRequest', (req, res) => {
    try {
        const username = req.body;
        if (!username)
            return res.status(401).json({ error: "invalid collector" });
        const location = Collector.findOne({
            "username": username

        }).location;
        const requests = Requests.find({ "location": location })
        requests = Array.from(requests);
        return res.status(200).json({ message: "request listed", requests: requests })
    }
    catch (err) {
        return res.status(401).json({ error: "unsuccess" });
    }
})