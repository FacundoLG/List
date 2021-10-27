const mongoose = require("mongoose");
const userModel = require("./model");
module.exports = {
  addUser: async (data) => {
    const newUser = new userModel({
      username: data.username,
      email: data.email,
      password: data.password,
    });

    newUser.save();
  },
};
