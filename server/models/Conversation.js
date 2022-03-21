const { Schema, model } = require("mongoose");

const ConversationModel = new Schema(
  {
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
  },
  { timestamps: true }
);

const conversation = model("conversation", ConversationModel);

module.exports = conversation;
