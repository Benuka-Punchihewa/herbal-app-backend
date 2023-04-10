const express = require("express");
const UserController = require("./user.controller");
const AuthMiddleware = require("../auth/auth.middleware");

const router = express.Router();

// create user
router.post("/", UserController.createUser);

module.exports = router;
