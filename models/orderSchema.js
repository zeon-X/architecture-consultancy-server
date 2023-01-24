const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      ref: "User",
      type: String,
      default: "",
    },
    serviceCategory: {
      type: String,
      default: "",
    },
    budget: {
      type: Number,
      default: "",
    },
    buyerName: {
      type: String,
      default: "",
    },
    clientMessage: {
      type: String,
      default: "",
    },

    whatsappPhone: {
      type: String,
      default: "",
    },
    address: {
      type: Object,
      default: "",
    },
    email: {
      type: Object,
      default: "",
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
      default: "",
    },
    specialMessage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
