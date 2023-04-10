const { StatusCodes } = require("http-status-codes");
const AuthUtil = require("./auth.util");

const register = async (req, res) => {
  return res.status(StatusCodes.CREATED).json();
};

const authorize = async (req, res) => {
  const { authHeader, accessRole } = req.body;
  const returnBody = AuthUtil.authorize(authHeader, accessRole);
  return res.status(StatusCodes.OK).json(returnBody);
};

module.exports = { register, authorize };
