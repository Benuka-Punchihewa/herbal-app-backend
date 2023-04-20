const Feedback = require("./feedback.model");

const save = async (Feedback) => {
  return Feedback.save();
};

const find = async () => {
  return Feedback.find();
};

const findById = async (id) => {
  return Feedback.findById(id);
};

const remove = async () => {
  return Feedback.remove();
};


const deleteOne = async (feedbackId) => {
  return Feedback.deleteOne(feedbackId);
};
module.exports = {
  save,
  find,
  remove,
  findById,
  deleteOne,
};
