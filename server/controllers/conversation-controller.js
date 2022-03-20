const conversation = require("../models/Conversation");
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
      createOne(req, conversation);
      response(res, 200, "new post created");
    } catch (error) {
      response(res, 400, error);
    }
  },
  //read all
  readAllConversations: (req, res) => {
    readAll(res, conversation);
  },
  //read one
  readConversation: (req, res) => {
    readOne(req, res, conversation);
  },
  //update one
  updateConversation: (req, res) => {
    // updateOne(req,res, conversation,key,value);
  },
  //delete one
  deleteConversation: (req, res) => {
    deleteOne(req, res, conversation);
  },
};
