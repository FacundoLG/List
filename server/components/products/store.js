const mongoose = require("mongoose");
const productModel = require("./model");

module.exports = {
  getProducts: async (userData) => {
    const result = await productModel.find({
      user_id: userData.id,
      active: true,
    });
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
  editOneProduct: async (productData) => {
    const product = await productModel.findOne({ _id: productData._id });
    if (product) {
      await product.overwrite({ ...productData });
      await product.save();
    } else {
      return new Error("[DB] unhandled error");
    }
  },
};
