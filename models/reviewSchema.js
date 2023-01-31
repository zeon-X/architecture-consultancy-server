const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    reviewTitle: {
      type: String,
      default: "",
    },
    reviewDiscription: {
      type: String,
      default: "",
    },
    clientImg: {
      type: String,
      default: "",
    },
    clientName: {
      type: String,
      default: "",
    },
    clientDesignation: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
