const express = require('express');
const mongoose = require('mongoose');

const Collectorschema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    noOfCollection: Number
})
module.exports = mongoose.model("collection", Collectorschema);
