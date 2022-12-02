const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/userRoutes');
const request = require('./routes/requestRoutes');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());





const port = 3000;
mongoose.connect(`${process.env.MONGODB_URI}`);

mongoose.connection.on('connected', () => {
    console.log("mongoose connected");
})

app.use('/user', user);
app.use('/request', request);



app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})