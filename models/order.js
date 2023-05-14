const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  price: Number,
  quantity: Number,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const OrderSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now(),
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  items: [ItemSchema],
});

module.exports = mongoose.model("Order", OrderSchema);
