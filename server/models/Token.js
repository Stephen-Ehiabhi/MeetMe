const { model, Schema } = require("mongoose");

const tokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model("token", tokenSchema);
