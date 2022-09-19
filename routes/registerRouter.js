const express = require("express");
const register = require("../controllers/registerController")

const router = express.Router();

router.post('/signup', register.signup);
router.post('/signin', register.signin);

module.exports = router;