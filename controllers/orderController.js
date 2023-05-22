const Order = require("../models/order");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
};

exports.addOrder = (req, res) => {
  const newOrder = new Order({
    customer: req.body.customer,
    items: req.body.items,
  });
  newOrder.save();
  res.json(newOrder);
};

exports.updateOrder = async (req, res) => {
  const updateOrder = await Order.findByIdAndUpdate(
    req.params.id,
    {
      customer: req.body.customer,
      items: req.body.items,
    },
    { new: true } // This option makes sure that the updated document is returned to the client instead of the original document (the default).
  );
  res.json(updateOrder);
};

exports.deleteOrder = async (req, res) => {
  const deleteOrder = await Order.findByIdAndDelete(req.params.id);
  res.json(deleteOrder);
};

exports.getOrderById = async (req, res) => {
  const getOrder = await Order.findById(req.params.id);
  res.json(getOrder);
};
