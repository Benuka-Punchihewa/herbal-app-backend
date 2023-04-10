const { StatusCodes } = require("http-status-codes");
const User = require("./user.model");
const UserService = require("./user.service");

const createUser = async (req, res) => {
  const user = new User(req.body);
  const dbUser = UserService.save(user);
  return res.status(StatusCodes.CREATED).json(dbUser);
};

module.exports = { createUser };
