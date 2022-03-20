const User = require("../models/User");
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
  createUser: (req, res) => {
    try {
      createOne(req, User);
      response(res, 200, "new user created");
    } catch (error) {
      response(res, 400, error);
    }
  },
  //add follower
  addFollower: async (req, res) => {
    try {
      //get user and find the user, the current user wants to follow follow
      const currentUser = await User.findOne(req.params.id);
      const followed = await User.findOne(req.query.UserId);
      //add new follow to current user following
      currentUser.following.push(req.query.userId);
      //update following amount
      currentUser.followingAmount += 1;
      //add new follower to the user followers
      followed.followers.push(currentUser._id);
      //update followers amount
      followed.followersAmount += 1;
      //save update
      await currentUser.save();
      await followed.save();
    } catch (error) {
      response(res, 400, error);
    }
  },
  //read all
  readAllUsers: (req, res) => {
    readAll(res, User);
  },
  //read one
  readUser: (req, res) => {
    readOne(req, res, User);
  },
  //update one
  updateUser: (req, res) => {
    // updateOne(req,res, User,key,value);
  },
  //delete one
  deleteUser: (req, res) => {
    deleteOne(req, res, User);
  },
};
