const { StatusCodes } = require("http-status-codes");
const OrderUtil = require("./order.util");

const processCart = async (req, res) => {
  const { sellerId, deliveryService, cartItems } = req.body;
  const result = await OrderUtil.processCart(
    sellerId,
    deliveryService,
    cartItems
  );
  return res.status(StatusCodes.OK).json(result);
};

module.exports = { processCart };
