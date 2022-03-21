const { Schema, model } = require("mongoose");

const ConversationModel = new Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

const conversation = model("conversation", ConversationModel);

module.exports = conversation;
