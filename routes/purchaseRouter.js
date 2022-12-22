const express = require('express');
const purchaseController = require('../controllers/purchaseController');


const router = express.Router();

// endpoints
router.post('/create', purchaseController.createPurchase)


module.exports = router;