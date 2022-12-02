const mongoose = require("mongoose");

const PublicrequestModel = mongoose.Schema({
    username: String,
    location: {
        type: String
    }


})
module.exports = mongoose.model("publicrequests ", PublicrequestModel)