const express = require('express');
const orders = require('../controllers/ordersController');
const router = express.Router();
const auth = require('../middlewares/auth');


router.post('/create', orders.createOrder);
router.get('/', auth.authorizeUser, orders.getOrders);


module.exports = router;