const {Schema, model} = require("mongoose");

const MessageSchema = new Schema(
  {
    conversationID: {
      type: String,
    },
    sender: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Message", MessageSchema);