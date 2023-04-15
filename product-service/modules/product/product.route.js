const express = require("express");
const ProductController = require("./product.controller");
const AuthMiddleware = require("../auth/auth.middleware");
const constants = require("../../constants");
const CommonMiddleware = require("../common/common.middleware");

const router = express.Router();

// create product
router.post(
  "/",
  CommonMiddleware.uploader.single("file"),
  AuthMiddleware.authorize([constants.ACCESS.ROLES.SELLER]),
  ProductController.createProduct
);

module.exports = router;