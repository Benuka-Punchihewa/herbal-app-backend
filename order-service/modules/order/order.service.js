const save = async (order) => {
  return order.save();
};

module.exports = { save };
