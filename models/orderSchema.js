const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      ref: "User",
      type: String,
    },
    serviceCategory: {
      type: String,
    },
    budget: {
      type: Number,
    },
    buyerName: {
      type: String,
      required: true,
    },
    clientMessage: {
      type: String,
    },

    whatsappPhone: {
      type: String,
      reuired: true,
    },
    address: {
      type: Object,
    },
    email: {
      type: Object,
    },

    status: {
      type: String,
      enum: ["pending", "rejected", "accepted", "processing", "completed"],
      default: "pending",
    },
    reviewStatus: {
      type: String,
      enum: ["pending", "active"],
      default: "pending",
    },
    reviewId: {
      type: String,
      ref: "Review",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
