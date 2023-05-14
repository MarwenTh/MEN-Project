const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  price: {
    type: Number,
    default: 0,
  },
  quantity: Number,
  description: String,
});

module.exports = mongoose.model("Product", ProductSchema);
