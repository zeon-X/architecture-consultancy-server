const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },

    img: {
      type: String,
      default: "",
    },
    pic: {
      type: String,
      default: "",
    },
    galleryBefore: {
      type: Array,
      default: [],
    },
    galleryAfter: {
      type: Array,
      default: [],
    },
    aboutLeft: {
      type: String,
      default: "",
    },
    aboutRight: {
      type: String,
      default: "",
    },
    category: {
      ref: "Category",
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
    },
    client: {
      type: String,
      default: "",
    },
    projectYear: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    designer: {
      type: String,
      default: "",
    },

    reviewId: {
      type: String,
      ref: "Review",
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
