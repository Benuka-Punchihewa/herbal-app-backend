const mongoose = require("mongoose");
const constants = require("../../constants");

const UserModel = mongoose.Schema(
  {
    auth: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is Required!"],
      maxlength: [100, "Name Should Not Exceed 100 Characters!"],
    },
    address: {
      type: String,
      required: [true, "Address is Required!"],
      maxlength: [300, "Address Should Not Exceed 300 Characters!"],
    },
    contactNumber: {
      type: String,
      required: [true, "Contact Number is Required!"],
      maxlength: [50, "Contact Number Should Not Exceed 50 Characters!"],
    },
    role: {
      type: String,
      required: [true, "User Role is Required!"],
      enum: {
        values: [
          constants.USER.ROLES.ADMIN,
          constants.USER.ROLES.SELLER,
          constants.USER.ROLES.CUSTOMER,
        ],
        message: "Valid Role is Required!",
      },
    },
    seller: {
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserModel);
