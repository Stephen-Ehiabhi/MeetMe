const Conversation = require("../models/Conversation");
const {
  createOne,
  readAll,
  readOne,
  deleteOne,
} = require("../services/crud");
const response = require("../services/response");

module.exports = {
  //create
  createConversation: (req, res) => {
    try {
      createOne(req, Conversation);
      response(res, 200, "new conversation created");
    } catch (error) {
      response(res, 500, error);
    }
  },
  //read all
  readAllConversations: (req, res) => {
    readAll(res, Conversation);
  },
  //read one
  readConversation: (req, res) => {
    readOne(req, res, Conversation);
  },
  //delete one
  deleteConversation: (req, res) => {
    deleteOne(req, res, Conversation);
  },
};
