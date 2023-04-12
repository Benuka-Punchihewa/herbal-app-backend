const User = require("./user.model");

const save = async (user) => {
  return user.save();
};

const findByAuthId = async (authId) => {
  return User.findOne({ auth: authId });
};

module.exports = { save, findByAuthId };
