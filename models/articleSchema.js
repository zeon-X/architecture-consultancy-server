const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    articleTitle: {
      type: String,
      default: "",
    },

    articlePara: [
      {
        img: {
          type: String,
          default: "",
        },
        paragraph: {
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
