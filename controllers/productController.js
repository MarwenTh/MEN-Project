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
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
    });
    newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deleteProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    res.json(getProduct);
  } catch (eroor) {
    res.status(500).json({ error: "Failed to get product" });
  }
};
