const express = require('express');
const router = express();
const Request = require("../../models/Request");

const viewrequest = require('../../controllers/viewrequestcontroller');

router.get('/viewrequests', viewrequest)
module.exports = router