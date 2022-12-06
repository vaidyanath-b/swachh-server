const express = require('express');
const router = express.Router();
const Request = require("../models/Request");

const request = async (req, res) => {
    try {
        const collector = req.body;
        const requests = await Request.find({ "location": collector.location });
        res.status(200).json({ message: "collecotr identified", requests: requests });

    }
    catch (err) {
        res.status()
    }

}

module.exports = request;

