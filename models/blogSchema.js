const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
    },

    blogPara: [
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
        others: {
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

module.exports = mongoose.model("Blog", blogSchema);
