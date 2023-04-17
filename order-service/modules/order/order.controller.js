const { StatusCodes } = require("http-status-codes");
const OrderUtil = require("./order.util");
const Order = require("./order.model");
const OrderService = require("./order.service");
const NotFoundError = require("../error/error.classes/NotFoundError");
const constants = require("../../constants");
const BadRequestError = require("../error/error.classes/BadRequestError");

const processCart = async (req, res) => {
  const { sellerId, deliveryService, cartItems } = req.body;
  const result = await OrderUtil.processCart(
    sellerId,
    deliveryService,
    cartItems
  );
  return res.status(StatusCodes.OK).json(result);
};

const createOrder = async (req, res) => {
  const auth = req.auth;
  const { sellerId, deliveryService, cartItems, shipping } = req.body;

  const processCartResult = await OrderUtil.processCart(
    sellerId,
    deliveryService,
    cartItems
  );

  const order = new Order({
    user: {
      _id: auth.user._id,
    },
    seller: {
      _id: processCartResult.seller._id,
      name: processCartResult.seller.name,
    },
    items: processCartResult.items,
    serviceCharge: processCartResult.serviceCharge,
    shippingCharge: processCartResult.shippingCost,
    subTotal: processCartResult.subTotal,
    total: processCartResult.total,
    shipping,
  });

  const dbOrder = await OrderService.save(order);

  return res.status(StatusCodes.CREATED).json(dbOrder);
};

const getById = async (req, res) => {
  const { orderId } = req.params;
  const dbOrder = await OrderService.findById(orderId);
  if (!dbOrder) throw new NotFoundError("Order not found!");
  return res.status(StatusCodes.OK).json(dbOrder);
};

const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  const dbOrder = await OrderService.findById(orderId);
  if (!dbOrder) throw new NotFoundError("Order not found!");

  dbOrder.status = status;
  const dbUpdatedOrder = await OrderService.save(dbOrder);

  return res.status(StatusCodes.OK).json(dbUpdatedOrder);
};

const confirmOrder = async (req, res) => {
  const { orderId } = req.params;

  const dbOrder = await OrderService.findById(orderId);
  if (!dbOrder) throw new NotFoundError("Order not found!");

  // validate order
  if (dbOrder.status === constants.STATUSES.PENDING)
    throw new BadRequestError("Order has not been paid yet!");
  if (
    dbOrder.status === constants.STATUSES.CONFIRMED ||
    dbOrder.status === constants.STATUSES.DISPATCHED ||
    dbOrder.status === constants.STATUSES.DELIVERED
  )
    throw new BadRequestError("Order has already been confirmed!");

  dbOrder.status = constants.STATUSES.CONFIRMED;
  const dbUpdatedOrder = await OrderService.save(dbOrder);

  return res.status(StatusCodes.OK).json(dbUpdatedOrder);
};

module.exports = {
  processCart,
  createOrder,
  getById,
  updateOrderStatus,
  confirmOrder,
};
