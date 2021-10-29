const mongoose = require("mongoose");
const userModel = require("./model");
module.exports = {
  addUser: async (data) => {
    const newUser = new userModel({
      username: data.username,
      password: data.password,
      email: data.email,
    });
    await newUser.save();
  },
  getOneUser: async (data) => {
    const result = await userModel.findOne({ username: data.username });
    return result;
  },
};
