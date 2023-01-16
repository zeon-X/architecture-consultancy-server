const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    categoryTitle: {
      type: String,
    },
    categoryCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);
