const mongoose = require("mongoose");
const { Schema } = mongoose;

const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    rank:{
      type: Number,
      required: true,
      default: 0
    },
    category: {
      type: String,
      required: true,
    },
    client_name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    cover_img: {
      type: String,
      required: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("portfolio", portfolioSchema);
