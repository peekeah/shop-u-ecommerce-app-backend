const express = require("express");
const users = require("../controllers/usersController");
const auth = require("../middlewares/auth");

const router = express.Router();

//Routes
router.patch("/update/:id", auth.authenticateToken, users.updateUser);
router.delete("/delete/:id", auth.authenticateToken, users.deleteUser);

router.get("/get-user", auth.authenticateToken, users.getUser);

//Admin authorization to get all users
router.get("/get-users", [auth.authenticateToken, auth.authorizeUser], users.getUsers);


module.exports = router;
