const customer = require("../models/customer");

exports.getCustomers = async (req, res) => {
  try {
    const customers = await customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve customers" });
  }
};

exports.addCustomer = (req, res) => {
  const newCustomer = new customer({
    name: {
      firstName: req.body.name.firstName,
      lastName: req.body.name.lastName,
    },
    email: req.body.email,
    phone: req.body.phone,
  });
  newCustomer.save();
  res.json(newCustomer);
};

exports.updateCustomer = async (req, res) => {
  const updateCustomer = await customer.findByIdAndUpdate(
    req.params.id,
    {
      name: {
        firstName: req.body.name.firstName,
        lastName: req.body.name.lastName,
      },
      email: req.body.email,
      phone: req.body.phone,
    },
    { new: true }
  );
  res.json(updateCustomer);
};

exports.deleteCustomer = async (req, res) => {
  const deleteCustomer = await customer.findByIdAndDelete(req.params.id);
  res.json(deleteCustomer);
};

exports.getCustomerById = async (req, res) => {
  const getCustomer = await customer.findById(req.params.id);
  res.json(getCustomer);
};
