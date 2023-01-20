const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    reviewTitle: {
      type: String,
    },
    reviewDiscription: {
      type: String,
    },
    clientImg: {
      type: String,
    },
    clientName: {
      type: String,
    },
    clientDesignation: {
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
