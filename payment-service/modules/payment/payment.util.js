const constants = require("../../constants");
const OrderService = require("../order/order.service");

const handlePaymentSuccessEvent = async (eventObj) => {
  const orderId = eventObj.metadata?.orderId;

  if (
    eventObj.payment_status !== constants.STRIPE_PAYMENT_STATUSES.PAID ||
    !orderId
  )
    return;

  try {
    const dbOrder = await OrderService.getById(orderId);
    if (!dbOrder) throw new NotFoundError("Order Not Found!");

    dbOrder.status = constants.ORDER.STATUSES.PAID;

    // update order details
    await OrderService.updateOrderStatus(
      orderId,
      constants.ORDER.STATUSES.PAID
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handlePaymentSuccessEvent };
