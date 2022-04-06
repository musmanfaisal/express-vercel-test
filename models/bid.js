const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema(
  {
    bidCompany: {
      type: String,
      required: true,
      max: 255,
      trim: true,
    },
    bidCoverLetter: {
      type: String,
      default: null,
    },
    bidProfile: {
      type: String,
      required: true,
    },
    bidQuestionsAnswer: {
      type: Array,
      default: null,
    },
    bidTime: {
      type: Date,
      required: true,
    },
    bidURL: {
      type: String,
      required: true,
    },
    bidder: {
      type: String,
      required: true,
    },
    clientCompany: {
      type: String,
      required: true,
    },
    clientHistory: {
      type: Array,
      default: [
        {
          value: ""
        }
      ],
    },
    clientLocationCountry: {
      type: String,
      required: true,
      max: 255,
    },
    clientLocationState: {
      type: String,
      default: null,
    },
    clientName: {
      type: String,
      require: true,
    },
    clientPaymentMethod: {
      type: String,
      require: true,
    },
    clientRating: {
      type: String,
      default: null,
    },
    clientUpworkPlus: {
      type: Boolean,
      default: false,
    },
    jobExperienceLevel: {
      type: String,
      require: true,
    },
    jobHourlyRange: {
      type: String,
      require: true,
    },
    jobHourly: {
      type: String,
      require: true,
    },
    jobProjectLengthDuration: {
      type: String,
      default: null,
    },
    jobCategories: {
      type: String,
      default: null,
    },
    jobDescription: {
      type: String,
      default: null,
      max: 255,
    },
    jobSkills: {
      type: Array,
      default: [
        {
          value: ""
        }
      ],
    },
    jobTitle: {
      type: String,
      default: null,
      max: 255,
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Bid", bidSchema);