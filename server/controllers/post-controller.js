const Post = require("../models/Post");
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
  createPost: (req, res) => {
    try {
      createOne(req, Post);
      response(res, 200, "new post created");
    } catch (error) {
      response(res, 400, error);
    }
  },
  //read all
  readAllPosts: (req, res) => {
    readAll(res, Post);
  },
  //read one
  readPost: (req, res) => {
    readOne(req, res, Post);
  },
  //update one
  updatePost: (req, res) => {
    // updateOne(req,res, Post,key,value);
  },
  //delete one
  deletePost: (req, res) => {
    deleteOne(req, res, Post);
  },
};
