const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
      default: "",
    },

    blogPara: [
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

module.exports = mongoose.model("Blog", BlogSchema);
