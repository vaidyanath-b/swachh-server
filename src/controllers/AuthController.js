const express = require('express')

const Collector = require('../models/Collector')
const login = async (req, res) => {
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
}

const signup = async (req, res) => {
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
}
module.exports = { login, signup }