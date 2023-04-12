const express = require("express");
const ProductController = require("./product.controller");
const AuthMiddleware = require("../auth/auth.middleware");
const constants = require("../../constants");

const router = express.Router();

// create product
router.post(
  "/",
  AuthMiddleware.authorize([constants.ACCESS.ROLES.SELLER]),
  ProductController.createProduct
);

module.exports = router;
