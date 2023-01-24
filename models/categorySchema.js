const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    categoryTitle: {
      type: String,
      default: "",
    },
    categoryCode: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);
