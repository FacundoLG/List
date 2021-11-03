const mongoose = require("mongoose");
const productModel = require("./model");

module.exports = {
  getProducts: async (userData) => {
    const result = await productModel.find({ user_id: userData.id });
    return result;
  },
  createOneProduct: async (userData, body) => {
    const newProduct = new productModel({
      user_id: userData.id,
      name: body.name,
      quantity: body.quantity,
      unit: body.unit,
      color: body.color,
    });
    await newProduct.save();
  },
};
