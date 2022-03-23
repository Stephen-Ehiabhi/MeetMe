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
      console.log(user1,user2);
      if (user1 || user2) {
        createOne(req, Conversation);
        response(res, 200, "new conversation created");
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
