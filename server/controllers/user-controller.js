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
