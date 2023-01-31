const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
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

    clientBudget: {
      type: String,
      default: "",
    },
    clientName: {
      type: String,
      default: "",
    },
    clientMessage: {
      type: String,
      default: "",
    },
    clientOtherComLink: {
      type: String,
      default: "",
    },
    clientWhatsappNum: {
      type: String,
      default: "",
    },
    clientAddress: {
      type: String,
      default: "",
    },
    clientEmail: {
      type: String,
      default: "",
    },

    planing: {
      type: Array,
      default: [],
    },
    houseAddress: {
      type: String,
      default: "",
    },
    existingPlaceImages: {
      type: Array,
      default: [],
    },
    inspirationImages: {
      type: Array,
      default: [],
    },

    otherFiles: {
      type: Array,
      default: [],
    },

    projectDiscription: {
      type: String,
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

module.exports = mongoose.model("Order", orderSchema);
