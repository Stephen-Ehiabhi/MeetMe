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

  updateOne: async (req, res, key, value) => {
    try {
      //find all the saved data
      const allData = await model.findOne(req.params.id);
      //edit the data in the model
      allData.key = value;
      //save the updated data
      await allData.save();
      response(res, 200, allData);
    } catch (error) {
      response(res, 400, error);
    }
  },

  delete: (req, res) => {
    try {
      //find single data and delete
      await model.deleteOne(req.params.id);

      response(res, 200, "deleted");
    } catch (error) {
      response(res, 400, error);
    }
  },
};
