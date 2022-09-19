const express = require("express");
const products = require("../controllers/productsController");

const router = express.Router();

router.get("/", products.getProducts);
router.post("/create", products.createProduct);
router.patch("/update/:id", products.updateProduct);
router.delete("/delete/:id", products.deleteProduct);

module.exports = router;
