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


  },
  served: {
    type: Boolean,
    default: false

  }
})

const Request = mongoose.model('request', RequestSchema)
module.exports = Request
