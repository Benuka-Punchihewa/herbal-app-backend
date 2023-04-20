const { StatusCodes } = require("http-status-codes");

const Feedback = require("./feedback.model");
const FeedbackService = require("./feedback.service");
const NotFoundError = require("../error/error.classes/NotFoundError");

const createFeedback = async (req, res) => {
  const auth = req.auth;
  const { sellerId, rating, description } = req.body;

  const { productId } = req.params;

  const feedback = new Feedback({
    user: {
      _id: auth.user._id,
    },
    seller: {
      _id: sellerId,
    },
    product: {
      _id: productId,
    },
    rating,
    description,
  });

  const dbFeedback = await FeedbackService.save(feedback);

  return res.status(StatusCodes.CREATED).json(dbFeedback);
};

const getFeedbacks = async (req, res) => {
  const { productId } = req.params;
  const dbFeedbacks = await FeedbackService.find({ product: productId });
  return res.status(StatusCodes.OK).json(dbFeedbacks);
};

const getFeedbackbyId = async (req, res) => {
  const { feedbackId } = req.params;
  const dbFeedback = await FeedbackService.findById(feedbackId.id);
  if (!dbFeedback) throw new NotFoundError("Feedback not found!");
  return res.status(StatusCodes.OK).json(dbFeedback);
};

const deleteFeedback = async (req, res) => {
  const auth = req.auth;
  const { id } = req.params;
  console.log(id);

  console.log(auth);

  // Check if the feedback exists
  const feedback = await FeedbackService.findById({ _id: id });
  if (!feedback) {
    throw new NotFoundError("Feedback not found");
  }

  // Check if the user is authorized to delete the feedback
  if (feedback.user._id.toString() !== auth.user._id.toString()) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }

  // Delete the feedback
  await FeedbackService.deleteOne({ _id: id });

  return res.status(StatusCodes.OK).send();
};

module.exports = {
  createFeedback,
  getFeedbacks,
  deleteFeedback,
  getFeedbackbyId,
};
