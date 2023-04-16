const Order = require("./order.model");

const save = async (order) => {
  return order.save();
};

const findById = async (id) => {
  return Order.findById(id);
};

module.exports = { save, findById };
