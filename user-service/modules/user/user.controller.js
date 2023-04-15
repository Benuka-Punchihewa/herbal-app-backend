const { StatusCodes } = require("http-status-codes");
const User = require("./user.model");
const UserService = require("./user.service");

const createUser = async (req, res) => {
  const user = new User(req.body);
  const dbUser = await UserService.save(user);
  return res.status(StatusCodes.CREATED).json(dbUser);
};

const findByAuthId = async (req, res) => {
  const { authId } = req.params;
  const dbUser = await UserService.findByAuthId(authId);
  return res.status(StatusCodes.OK).json(dbUser);
};

const findById = async (req, res) => {
  const { userId } = req.params;
  const dbUser = await UserService.findById(userId);
  return res.status(StatusCodes.OK).json(dbUser);
};


module.exports = { createUser, findByAuthId, findById };
