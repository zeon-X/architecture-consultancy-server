const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    pic: {
      type: String,
    },
    galleryBefore: {
      type: Array,
    },
    galleryAfter: {
      type: Array,
    },
    aboutLeft: {
      type: String,
    },
    aboutRight: {
      type: String,
    },
    category: {
      ref: "Category",
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
    },
    client: {
      type: String,
    },
    projectYear: {
      type: String,
    },
    location: {
      type: String,
    },
    designer: {
      type: String,
    },

    reviewId: {
      type: String,
      ref: "Review",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
