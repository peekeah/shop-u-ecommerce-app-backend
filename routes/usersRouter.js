const express = require("express");
const users = require("../controllers/usersController");

const router = express.Router();

router.get("/", users.getUsers);
router.patch("/update/:id", users.updateUser);
router.delete("/delete/:id", users.deleteUser);

module.exports = router;
