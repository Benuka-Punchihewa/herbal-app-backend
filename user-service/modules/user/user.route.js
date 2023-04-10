const express = require("express");
const UserController = require("./user.controller");

const router = express.Router();

// create user
router.post("/", UserController.createUser);

module.exports = router;
