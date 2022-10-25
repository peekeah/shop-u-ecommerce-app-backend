const express = require("express");
const auth = require("../middlewares/auth");

const router = express.Router();
const razorpay = require("../controllers/razorpayController");

router.post("/pay", auth.authenticateToken, razorpay.createPayment);
router.post("/verify", razorpay.verify);

module.exports = router;
