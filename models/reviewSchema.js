const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    reviewTitle: {
      type: String,
    },
    review: {
      type: String,
    },
    userId: {
      type: String,
      ref: "User",
    },
    img: {
      type: String,
    },
    name: {
      type: String,
    },
    designation: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
