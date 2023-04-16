const Product = require("./product.model");

const save = async (product) => {
  return product.save();
};

const findById = (id) => {
  return Product.findById(id);
};

module.exports = {
  save,
  findById,
};
