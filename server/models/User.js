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
    default: 0,
  },
  followingsAmount: {
    type: Number,
    default: 0,
  },
  followers: [],
  following: [],
  password: {
    type: String,
   // required: true,
    min: 6,
    max: 16,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
    max: 50,
  },
  city: {
    type: String,
    max: 50,
  },
  from: {
    type: String,
    max: 50,
  },
  relationship: {
    type: Number,
    enum: [1, 2, 3],
  }
},
{timestamps: true});

const user = model("user", UserModel);

module.exports = user;
