const mongoose = require('mongoose');

const schema = mongoose.schema({
    username: { type: String, required: true },
    description: { type: String },
    time: { type: Time }
}
);

module.exports = schema("Request", schema);

