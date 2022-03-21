const { Schema, model } = require("mongoose");

const ConversationModel = new Schema({
  text: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isCreated: {
    type: Date,
    default:Date.now()
  }
});

const conversation = model("conversation", ConversationModel);

module.exports = conversation;
