const { findone } = require("mongoose");
//components
const { response } = require("./response");

module.exports = {
  create: async (req, res, model) => {
    const newData = new model.create(req.body);
    await newData.save();
  },

  readAll: async (req, res, model) => {
    try {
      //find all the saved data
      const allData = await model.find();
      //respond with success
      response(res, 200, allData);
    } catch (error) {
      response(res, 400, error);
    }
  },

  readSingle: async (req, res) => {
    try {
       //find single saved data with the id from the route paramater
       const singleData = await model.findOne(req.params.id);
       //respond with success
       response(res, 200, singleData);
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
