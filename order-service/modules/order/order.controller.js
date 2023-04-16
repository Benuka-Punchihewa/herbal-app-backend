const { StatusCodes } = require("http-status-codes");

const processCart = async (req, res) => {
  res.status(StatusCodes.OK).json();
};

module.exports = { processCart };
