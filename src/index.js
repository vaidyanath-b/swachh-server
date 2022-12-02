const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user/userRoutes');
const request = require('./routes/request/requestRoutes');
const collect = require('./routes/collection/collectionRoutes');
const serve = require('./routes/collection/serveRequest')
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());




const port = 5000;
mongoose.connect(`${process.env.MONGODB_URI}`);

mongoose.connection.on('connected', () => {
    console.log("mongoose connected");
})

app.use('/user', user);
app.use('/request', request);
app.use('/collect', collect);
app.use('/serve', serve);



app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})