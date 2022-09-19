const express = require("express");
const products = require("../controllers/productsController");
const auth = require("../middlewares/auth");


const router = express.Router();


//Routes
router.get("/", products.getProducts);
router.post("/create", [auth.authenticateToken, auth.authorizeUser], products.createProduct);
router.patch("/update/:id", [auth.authenticateToken, auth.authorizeUser], products.updateProduct);
router.delete("/delete/:id", [auth.authenticateToken, auth.authorizeUser], products.deleteProduct);



module.exports = router;
