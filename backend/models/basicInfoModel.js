const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const basicInfoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 255,
    },
    facebook_link: {
      type: String,
      validate: {
        validator: function (v) {
          return !v || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
      default: null,
    },
    linkedin_link: {
      type: String,
      validate: {
        validator: function (v) {
          return !v || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
      default: null,
    },
    github_link: {
      type: String,
      validate: {
        validator: function (v) {
          return !v || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
      default: null,
    },
    gitlab_link: {
      type: String,
      validate: {
        validator: function (v) {
          return !v || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
      default: null,
    },
    insta_link: {
      type: String,
      validate: {
        validator: function (v) {
          return !v || /^https?:\/\/[^\s$.?#].[^\s]*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
      default: null,
    },
    degree: {
      type: String,
      required: true,
      maxlength: 255,
    },
    phone_no: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 255,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Email is invalid."],
    },
    location: {
      type: String,
      required: true,
      maxlength: 255,
    },
    experience: {
      type: String,
      required: true,
      maxlength: 255,
    },
    summary: {
      type: String,
      default: null,
    },
    education: {
      type: String,
      default: null,
    },
    job_experience: {
      type: String,
      default: null,
    },
    image:{
      type: String,
      default: null, 
    },
    cover_image:{
        type: String,
        default: null, 
    },
    cv: {
      type: String,
      default: null,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("basicInfo", basicInfoSchema);
