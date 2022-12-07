const express = require('express')
const CollectionReport = require('../models/Collection')
module.exports = (req, res) => {
    try {
        const { username, collectorName, locality, date, wasteddata } = req.body;
        if (!username) {
            return res.status(401).json({ error: "invalid user" });
        }
        if (!collectorName) {
            return res.status(401).json({ error: "invalid user" });
        }
        if (!locality) {
            return res.status(401).json({ error: "invalid user" });
        }
        if (!wasteddata) {
            return res.status(401).json({ error: "invalid data" });
        }
        const collectionreport = CollectionReport.create({
            "username": username,
            "collectorName": collectorName,
            "locality": locality,
            "date": date,
            "wasteddata": wasteddata
        })
        res.status(200).json({ message: "successfully reported", report: collectionreport })
    }
    catch (err) {
        return res.status(401).json({ error: "something went wrong" })
    }
}