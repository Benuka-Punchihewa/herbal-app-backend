const User = require("./user.model");

const save = async (user) => {
  return user.save();
};

const findByAuthId = async (authId) => {
  return User.findOne({ auth: authId });
};

const findById = async (userId) => {
  return User.findById(userId);
};

module.exports = { save, findByAuthId, findById };
