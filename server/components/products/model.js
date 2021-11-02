const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: false,
    default: "U",
  },
  color: {
    type: Number,
    requied: true,
    default: 1,
  },
  cartState: {
    type: String,
    required: true,
    default: "toBuy",
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const model = mongoose.model("products", productSchema);

module.exports = model;
