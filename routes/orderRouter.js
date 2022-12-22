const express = require('express');
const orderController = require('../controllers/orderController');


const router = express.Router();

// endpoints
router.post('/create', orderController.createPurchase)
router.get('/user-orders', orderController.userPurchase)

module.exports = router;