const jwt = require("jsonwebtoken");
const User = require('../models/User');

const verifyToken = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authotization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, (err, decode) => {
            if (err) return res.status(309).json({ error: "bad day" })
            User.findOne({
                _id: decode.id
            })
                .exec((err, user) => {
                    if (err) return res.status(500).json({ error: err })
                    else {
                        console.log(user.username)
                        req.user = user;
                        next();
                    }

                })
        })
    } else {

        next();
    }
}
module.exports = verifyToken