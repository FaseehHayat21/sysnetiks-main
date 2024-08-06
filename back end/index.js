const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const path = require('path')
const app = express()
require('dotenv').config(); 

// const bodyParser = require('body-parser');
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json());

// app.use('/uploads', express.static('uploads'))
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Sysnatiks Backend is Running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database Error", err);
    });
app.use('/api/auth', require('./Routes/auth'))
app.use('/api/news', require('./Routes/news'))


