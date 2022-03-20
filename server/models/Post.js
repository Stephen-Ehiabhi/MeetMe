const { Schema, model } = require("mongoose");

const PostModel = new Schema({
  text: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isCreated: {
    type: new Date.now(),
  },
});

const post = model("post", PostModel);

module.exports = post;
