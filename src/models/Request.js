const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RequestSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Request = mongoose.model('chrps', RequestSchema)
module.exports = Request
