const order = require("../models/order");

exports.getOrders = async (req, res) => {
  try {
    const orders = await order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
};

exports.addOrder = (req, res) => {
  const newOrder = new order({
    customer: req.body.customer,
    items: req.body.items,
  });
  newOrder.save();
  res.json(newOrder);
};

exports.updateOrder = async (req, res) => {
  const updateOrder = await order.findByIdAndUpdate(
    req.params.id,
    {
      customer: req.body.customer,
      items: req.body.items,
    },
    { new: true }
  );
  res.json(updateOrder);
};

exports.deleteOrder = async (req, res) => {
  const deleteOrder = await order.findByIdAndDelete(req.params.id);
  res.json(deleteOrder);
};

exports.getOrderById = async (req, res) => {
  const getOrder = await order.findById(req.params.id);
  res.json(getOrder);
};
