const mongoose = require("mongoose");
//components
const { response } = require("./response");

module.exports = {
  create: (req, res, message) => {
    try {
      //check if exists  
      
      response(res, 200, message);
    } catch (error) {
      response(res, 400, error);
    }
  },

  readAll: (req, res) => {
    try {
      response(res, 200);
    } catch (error) {
      response(res, 400, error);
    }
  },

  readSingle: (req, res) => {
    try {
      response(res, 200, "New User Created");
    } catch (error) {
      response(res, 400, error);
    }
  },

  update: (req, res) => {
    try {
      response(res, 200, "New User Created");
    } catch (error) {
      response(res, 400, error);
    }
  },

  delete: (req, res) => {
    try {
      response(res, 200, "New User Created");
    } catch (error) {
      response(res, 400, error);
    }
  },
};
