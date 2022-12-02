const mongoose = require('mongoose');
schema = mongoose.Schema;

const userModel = schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String }
    }
)

module.exports = mongoose.model("User", userModel);