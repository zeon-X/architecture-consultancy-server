const mongoose = require("mongoose");

const serviceCategorySchema = new mongoose.Schema(
  {
    categoryTitle: {
      type: String,
      default: "",
    },
    categoryCode: {
      type: String,
      default: "",
    },
    categoryImage: {
      type: String,
      default: "",
    },
    categoryDiscription: {
      type: String,
      default: "",
    },
    categoryType: {
      type: String,
      enum: ["parent", "sub"],
      default: "parent",
    },

    parentId: {
      type: String,
      default: null,
      ref: "ServiceCategory",
    },
    parentTitle: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ServiceCategory", serviceCategorySchema);
