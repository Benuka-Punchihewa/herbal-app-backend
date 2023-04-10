const mongoose = require("mongoose");
const axios = require("axios");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../error/error.classes/BadRequestError");
const ConflictError = require("../error/error.classes/ConflictError");
const ForbiddenError = require("../error/error.classes/ForbiddenError");
const InternalServerError = require("../error/error.classes/InternalServerError");
const NotFoundError = require("../error/error.classes/NotFoundError");
const UnauthorizedError = require("../error/error.classes/UnauthorizedError");

const connectDB = async (database_url) => {
  mongoose.connect(database_url);
};

const getAxiosInsance = () => {
  return axios.create({
    baseURL: constants.API_BASE_URL,
    headers: {
      Authorization: "Bearer " + process.env.SERVICE_ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
  });
};

const buildAxiosResponse = async (success, data, statusCode) => {
  if (success) {
    return data;
  } else {
    switch (statusCode) {
      case StatusCodes.BAD_REQUEST:
        throw new BadRequestError(data.message);
      case StatusCodes.CONFLICT:
        throw new ConflictError(data.message);
      case StatusCodes.FORBIDDEN:
        throw new ForbiddenError(data.message);
      case StatusCodes.INTERNAL_SERVER_ERROR:
        throw new InternalServerError(data.message);
      case StatusCodes.NOT_FOUND:
        throw new NotFoundError(data.message);
      case StatusCodes.UNAUTHORIZED:
        throw new UnauthorizedError(data.message);
      default:
        throw new UnauthorizedError("Something Went Wrong!");
    }
  }
};

module.exports = { connectDB, getAxiosInsance, buildAxiosResponse };
