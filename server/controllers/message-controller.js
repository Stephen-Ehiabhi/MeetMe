const Message = require("../models/Message");
const {
  createOne,
  updateOne,
  deleteOne,
} = require("../services/crud");
const response = require("../services/response");

module.exports = {
  //create
  createMessage: (req, res) => {
    try {
      createOne(req, Message);
      response(res, 200, "new Message created");
    } catch (error) {
      response(res, 400, error);
    }
  },
  //read all ?conversationId=
  readAllMessages: async (req, res) => {
    try {
      //find all the saved data
      const allData = await Message.find({
        conversationID: req.params.conversationId,
      });
      //respond with success
      response(res, 200, allData);
    } catch (error) {
      response(res, 400, error.message);
    }
  },

  //update one
  updateMessage: (req, res) => {
    // updateOne(req,res, Message,key,value);
  },
  //delete one
  deleteMessage: (req, res) => {
    deleteOne(req, res, Message);
  },
};
