const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    articleTitle: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
    },
    categoryId: {
      type: String,
      default: "",
    },
    articlePara: [
      {
        img: {
          type: String,
          default: "",
        },
        imgTags: {
          type: String,
          default: "",
        },
        paragraph: {
          type: String,
          default: "",
        },
        paragraphFull: {
          type: String,
          default: "",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", articleSchema);
