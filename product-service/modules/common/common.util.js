const mongoose = require("mongoose");

/**
 * connects to mongodb database
 */
const connectDB = async (database_url) => {
  mongoose.connect(database_url);
};

module.exports = { connectDB };
