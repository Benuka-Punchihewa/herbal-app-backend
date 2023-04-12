const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    seller: {
      user: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    name: {
      type: String,
      required: [true, "Product name is required!"],
    },
    description: {
      type: String,
      required: [true, "Product description is required!"],
      maxLength: [250, "Product description cannot exceed 250 characters!"],
    },
    image: {
      mimeType: {
        type: String,
        required: [true, "Product image is required!"],
      },
      firebaseStorageRef: {
        type: String,
        required: [true, "Product image is required!"],
      },
    },
    stock: {
      level: {
        type: Number,
        required: [true, "Stock level is required!"],
      },
      minThreashold: {
        type: Number,
        required: [true, "Stock threashold is required!"],
      },
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required!"],
      default: 5,
    },
    unitAmount: {
      type: Number,
      required: [true, "Unit amount is required!"],
    },
    unit: {
      type: String,
      required: [true, "Unit is required!"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
