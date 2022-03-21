const { Schema, model } = require("mongoose");

const PostModel = new Schema({
  userId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    max: 500,
  },
  image: {
    type: String,
  },
  likes: {
    type: Array,
    default: [],
  },
  timestamps: true,
});

const post = model("post", PostModel);

module.exports = post;
