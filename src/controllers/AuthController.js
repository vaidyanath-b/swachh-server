const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Collector = require('../models/Collector')
const login = async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ error: "Please enter username and password" })
        }

        Collector.findOne({ "username": req.body.username })

            .exec(err, user)
        {
            if (err) {
                return res.status(402).json({ error: err })
            }
            if (!user) {
                return res.status(403).json({ error: "User not found" })
            }
            var isPasswordValid = bcrypt.compareSync(user.password, req.body.password)

            if (!isPasswordValid)
                return res.status(401).json({
                    accessToken: null,
                    message: "incorrect password"
                });
            var token = jwt.sign({
                id: user.id
            },
                process.env.API_SECRET,
                {
                    expiresIn: 86400
                }
            )
            res.status(200).json({
                user: {
                    id: user._id,
                    username: user.usernam
                },
                message: "login succesful",
                accessToken: token
            });


        }

    }
    catch (err) {
        return res.status(401).json({ error: err })
    }
}

const signup = async (req, res) => {
    try {


        const user = await new User({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8),
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })
        user.save((err, user) => {
            if (err)
                return res.status(401).json({
                    error: "something went wrong"
                })
            return res.status(200).json({
                message: "signin successfull",
            })


        })

    }
    catch (err) {
        return res.status(500)
            .json({ error: "something went wrong ", message: err.message })
    }
}
module.exports = { login, signup }