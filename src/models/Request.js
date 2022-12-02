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
  },
  typeofwaste: {
    ewaste: Boolean,
    plastic: Boolean,
    foodwaste: Boolean,
    other: Boolean


  }
})

const Request = mongoose.model('request', RequestSchema)
module.exports = Request
