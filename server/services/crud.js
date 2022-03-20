const { findone } = require("mongoose");
//components
const { response } = require("./response");

module.exports = {
  createOne: async (req, model) => {
    const newData = new model.create(req.body);
    await newData.save();
  },

  readAll: async (res, model) => {
    try {
      //find all the saved data
      const allData = await model.find();
      //respond with success
      response(res, 200, allData);
    } catch (error) {
      response(res, 400, error);
    }
  },

  readOne: async (req, res, model) => {
    try {
      //find single saved data with the id from the route paramater
      const singleData = await model.findOne(req.params.id);
      //respond with success
      response(res, 200, singleData);
    } catch (error) {
      response(res, 400, error);
    }
  },

  updateOne: async (req, res, model ,key, value) => {
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

  deleteOne: (req, res, model) => {
    try {
      //find single data and delete
      await model.deleteOne(req.params.id);

      response(res, 200, "deleted");
    } catch (error) {
      response(res, 400, error);
    }
  },
};
