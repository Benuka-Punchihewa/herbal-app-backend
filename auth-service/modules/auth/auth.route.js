const express = require("express");
const AuthMiddleware = require("./auth.middleware");
const constants = require("../../constants");
const AuthController = require("./auth.controller");

const router = express.Router();

// register
router.post("/", AuthController.register);

// authorize
router.post(
  "/authorization",
  AuthMiddleware.authorize([constants.ACCESS.ROLES.SERVICE]),
  AuthController.authorize
);

module.exports = router;
