const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const registerRouter = require('./routes/registerRouter');
const ordersRouter = require('./routes/ordersRouter');
const razorpayRouter = require('./routes/razorpayRouter');
const purchaseRouter = require('./routes/purchaseRouter');
const auth = require('./middlewares/auth');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send({ title: 'Shop U Backend' });
})

//Routes
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', auth.authenticateToken, ordersRouter);
app.use('/razorpay', razorpayRouter);   
app.use('/purchase', auth.authenticateToken, purchaseRouter);


//MongoDB connection
const URL = process.env.DB_URL;
const PORT = process.env.DB_PORT || 5000;
mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`Server Started On ${PORT}`);
    })
})



