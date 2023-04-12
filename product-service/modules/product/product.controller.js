const { StatusCodes } = require("http-status-codes");

const createProduct = (req, res) => {
  return res.status(StatusCodes.CREATED).json();
};

module.exports = {
  createProduct,
};
