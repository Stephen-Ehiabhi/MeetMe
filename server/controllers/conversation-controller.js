const Conversation = require("../models/Conversation");
const {
  createOne,
  readAll,
  readOne,
  updateOne,
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
      response(res, 400, error);
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
  //update one
  updateConversation: (req, res) => {
    // updateOne(req,res, Conversation,key,value);
  },
  //delete one
  deleteConversation: (req, res) => {
    deleteOne(req, res, Conversation);
  },
};
