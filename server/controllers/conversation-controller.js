const Conversation = require("../models/Conversation");
const user = require("../models/User");
const User = require("../models/User");
const { createOne, readAll, readOne, deleteOne } = require("../services/crud");
const response = require("../services/response");

module.exports = {
  //create ?name1=&name2=
  createConversation: async (req, res) => {
    const user1 = await User.findOne({
      username: req.query.name1,
      followers: { $in: [req.query.name2] },
    });
    const user2 = await User.findOne({
      username: req.query.name2,
      followers: { $in: [req.query.name1] },
    });
    try {
      if (user1 || user2) {
        createOne(req, Conversation);
        response(res, 200, "New conversation created");
      } else {
        response(
          res,
          400,
          "You cannot start a conversation with someone you do not follow"
        );
      }
    } catch (error) {
      response(res, 500, error);
    }
  },
  //read all conversations for a particular user
  readAllConversations: async (req, res) => {
    try {
      const userConversations = await Conversation.find({
        members: { $in: [req.params.userId] },
      });
      response(res, 200, userConversations);
    } catch (e) {
      response(res, 500, error.message);
    }
  },
  //read one conversation between two people
  readConversation: (req, res) => {
    readOne(req, res, Conversation);
  },
  //delete one
  deleteConversation: (req, res) => {
    deleteOne(req, res, Conversation);
  },
};
