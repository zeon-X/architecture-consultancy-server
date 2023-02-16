const mongoose = require("mongoose");

const clientPageComponentSchema = new mongoose.Schema({
  whoWeAreSection: {
    sectionName: {
      type: String,
      default: "",
    },
    sectionTitle: {
      type: String,
      default: "",
    },
    sectionAbout: {
      type: String,
      default: "",
    },
    btnText: {
      type: String,
      default: "",
    },
    img1: {
      type: String,
      default: "",
    },
    img2: {
      type: String,
      default: "",
    },
  },

  ourTeamSection: {
    sectionTitle: {
      type: String,
      default: "",
    },
    team: [
      {
        img: {
          type: String,
          default: "",
        },
        name: {
          type: String,
          default: "",
        },
        designation: {
          type: String,
          default: "",
        },
      },
    ],
  },

  contactSection: {
    phone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    socialMedia: [
      {
        socialMediaName: {
          type: String,
          default: "",
        },
        socialMediaIcon: {
          type: String,
          default: "",
        },
        socialMediaLink: {
          type: String,
          default: "",
        },
      },
    ],
  },
});
module.exports = mongoose.model(
  "ClientPageComponent",
  clientPageComponentSchema
);
