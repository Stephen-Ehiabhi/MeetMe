const post = require("../models/Post");
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
      createOne(req, post);
      response(res, 200, "new post created");
    } catch (error) {
      response(res, 400, error);
    }
  },
  //read all
  readAllPosts: (req, res) => {
    readAll(res, post);
  },
  //read one
  readPost: (req, res) => {
    readOne(req, res, post);
  },
  //update one
  updatePost: (req, res) => {
    // updateOne(req,res, post,key,value);
  },
  //delete one
  deletePost: (req, res) => {
    deleteOne(req, res, post);
  },
};
