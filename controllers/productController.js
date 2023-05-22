const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

exports.addProduct = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description,
  });
  newProduct.save();
  res.json(newProduct);
};

exports.updateProduct = async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
    },
    { new: true }
  );
  res.json(updateProduct);
};

exports.deleteProduct = async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.json(deleteProduct);
};

exports.getProductById = async (req, res) => {
  const getProduct = await Product.findById(req.params.id);
  res.json(getProduct);
};
