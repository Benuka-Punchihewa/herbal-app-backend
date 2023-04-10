const { StatusCodes } = require("http-status-codes");
const AuthUtil = require("./auth.util");
const Auth = require("./auth.model");
const AuthService = require("./auth.service");
const UserService = require("../user/user.service");
const constants = require("../../constants");
const BadRequestError = require("../error/error.classes/BadRequestError");

const register = async (req, res) => {
  const { email, name, address, contactNumber, role, password } = req.body;

  // disallow admin registration
  if (role === constants.USER.ROLES.ADMIN)
    throw new BadRequestError("Not Allowed to Create Admin Accounts!");

  // create auth document
  const auth = new Auth({
    _id: email,
    password: await AuthUtil.getEncryptedPassword(password),
  });
  const dbAuth = await AuthService.save(auth);

  // create user document
  const user = await UserService.createUser({
    auth: {
      _id: dbAuth._id,
    },
    name,
    address,
    contactNumber,
    role,
  });

  return res.status(StatusCodes.CREATED).json(user);
};

const authorize = async (req, res) => {
  const { authHeader, accessRole } = req.body;
  const returnBody = AuthUtil.authorize(authHeader, accessRole);
  return res.status(StatusCodes.OK).json(returnBody);
};

module.exports = { register, authorize };
