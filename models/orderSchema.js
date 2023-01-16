const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      ref: "User",
      type: String,
    },
    serviceCategory: {
      type: String,
      required: true,
    },

    budget: {
      type: Number,
      required: true,
    },
    buyerName: {
      type: String,
      required: true,
    },
    phone: {
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
      enum: ["pending", "accepted", "processing", "delivered"],
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
