const { Schema, model } = require("mongoose");

const UserModel = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
type: String,
required: 
  },
  isCreated: {
    type: new Date.now(),
  },
});

const user = model("User", UserModel);

module.exports = user;
