const express = require("express");
const users = require("../controllers/usersController");
const auth = require("../middlewares/auth");

const router = express.Router();

//Routes
router.patch("/update/:id", auth.authenticateToken, users.updateUser);
router.delete("/delete/:id", auth.authenticateToken, users.deleteUser);

//Admin authorization to get all users
router.get("/", [auth.authenticateToken, auth.authorizeUser], users.getUsers);


module.exports = router;
