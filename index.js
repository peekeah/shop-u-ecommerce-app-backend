const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const registerRouter = require('./routes/registerRouter');
const ordersRouter = require('./routes/ordersRouter');
const auth = require('./middlewares/auth');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    res.send('Ecommerce Backend');
})
    

//Routes
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', auth.authenticateToken, ordersRouter);
    

//MongoDB connection
const URL = process.env.DB_URL;
const PORT = process.env.DB_PORT || 5000;
mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`Server Started On ${PORT}`);
    })
})