
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
  createUser: async (req, res) => {
    try {
      const userFound = await User.exists({ email: req.body.email });
      //check if user already exists
      if (userFound) return response(res, 409, "User already exists");
      //create single user
      createOne(req, User);
      response(res, 201, "new user created");
    } catch (error) {
      response(res, 400, error.message);
    }
  },
    //login
    loginUser: async (req, res) => {
         try {
           const userFound = await User.exists({ email: req.body.email });
           //check if user  exists
           if (!userFound) return response(res, 409, "Incorrect email or password");
           
           

           response(res, 201, "new user created");
         } catch (error) {
           response(res, 400, error.message);
         }
       },
  //add follower
  followUser: async (req, res) => {
    try {
      //get user and find the user, the current user wants to follow follow
      const currentUser = await User.findOne({_id: req.params.id});
      const friend = await User.findOne({username: req.query.username});
      //add new follow to current user following
      currentUser.following.push(friend.username);
      //update following amount
      currentUser.followingsAmount += 1;
      //add new follower to the user followers
      friend.followers.push(currentUser.username);
      //update followers amount
      friend.followersAmount += 1;
      //save update
      await currentUser.save();
      await friend.save();
      //response
      response(res, 200, `You followed ${friend.username}`);
    } catch (error) {
      response(res, 400, error.message);
    }
  },
  //remove follower
  unFollowUser: async (req, res) => {
    try {
      response(res, 200, `You unfollowed ${friend.username}`);
    } catch (error) {
      response(res, 400, error.message);
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
