const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const URL = process.env.DB_URL;
const PORT = process.env.DB_PORT || 5000;

mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`Server Started On ${PORT}`);
    })
})