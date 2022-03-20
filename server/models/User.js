const { Schema, model } = require("mongoose");

const UserModel = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
  },
  followersAmount: {
    type: Number,
    default: 0
  },
  followingsAmount: {
    type: Number,
    default: 0
  },
  followers: [],
  following: [],
  isCreated: {
    type: Date,
    default:Date.now()
  }
});

const user = model("user", UserModel);

module.exports = user;
