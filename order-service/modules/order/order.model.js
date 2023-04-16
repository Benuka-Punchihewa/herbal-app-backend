const mongoose = require("mongoose");
const Constants = require("../../constants");

const OrderItemSchema = new mongoose.Schema({
  product: {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: FirebaseSchema,
  },
  quantity: {
    type: Number,
    required: [true, "Item Quantity is Required!"],
  },
  total: {
    type: Number,
    required: [true, "Item Total Price is Required!"],
  },
});

const OrderSchema = new mongoose.Schema(
  {
    user: {
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
    },
    seller: {
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    items: [OrderItemSchema],
    serviceCharge: {
      type: Number,
      required: [true, "Service Charge is Required!"],
    },
    subTotal: {
      type: Number,
      required: [true, "Sub Total is Required!"],
    },
    total: {
      type: Number,
      required: [true, "Sub Total is Required!"],
    },
    shipping: {
      name: {
        type: String,
        required: [true, "Receiver's name is required!"],
      },
      address: {
        type: String,
        required: [true, "Receiver's address is required!"],
      },
      contactNumber: {
        type: String,
        required: [true, "Receiver's mobile number is required!"],
      },
      charges: {
        type: Number,
        required: [true, "Shipping charge is required!"],
      },
    },
    status: {
      type: String,
      required: [true, "Order Status Cannot Be Undefined!"],
      enum: {
        values: [
          Constants.STATUSES.PENDING,
          Constants.STATUSES.PAID,
          Constants.STATUSES.CONFIRMED,
          Constants.STATUSES.DISPATCHED,
          Constants.STATUSES.DELEVERED,
        ],
        message: "Invalid Order Status!",
      },
      default: OrderConstants.STATUSES.PENDING,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
