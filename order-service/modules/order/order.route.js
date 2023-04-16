const express = require("express");
const OrderController = require("./order.controller");
const AuthMiddleware = require("../auth/auth.middleware");
const constants = require("../../constants");

const router = express.Router();

// process cart
router.post(
  "/cart",
  AuthMiddleware.authorize([constants.ACCESS.ROLES.CUSTOMER]),
  OrderController.processCart
);

// create order
router.post(
  "/",
  AuthMiddleware.authorize([constants.ACCESS.ROLES.CUSTOMER]),
  OrderController.createOrder
);

module.exports = router;
