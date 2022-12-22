const express = require('express');
const purchaseController = require('../controllers/purchaseController');


const router = express.Router();

// endpoints
router.post('/create', purchaseController.createPurchase)
router.get('/user-orders', purchaseController.userPurchase)

module.exports = router;