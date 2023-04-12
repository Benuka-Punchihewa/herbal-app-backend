const express = require("express");
const UserController = require("./user.controller");
const AuthMiddleware = require("../auth/auth.middleware");
const constants = require("../../constants");

const router = express.Router();

// create user
router.post(
  "/",
  AuthMiddleware.authorize([constants.ACCESS.ROLES.SERVICE]),
  UserController.createUser
);

router.get(
  "/auth/:authId",
  AuthMiddleware.authorize([constants.ACCESS.ROLES.SERVICE]),
  UserController.findByAuthId
);

module.exports = router;
