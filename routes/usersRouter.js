const express = require("express");
const users = require("../controllers/usersController");
const auth = require("../middlewares/auth");

const router = express.Router();

//Routes
router.patch("/update", auth.authenticateToken, users.updateUser);
router.delete("/delete", auth.authenticateToken, users.deleteUser);

router.get("/get-user", auth.authenticateToken, users.getUser);
router.patch("/add-address", auth.authenticateToken, users.addAddress);

//Admin authorization to get all users
router.get("/get-users", [auth.authenticateToken, auth.authorizeUser], users.getUsers);


module.exports = router;
