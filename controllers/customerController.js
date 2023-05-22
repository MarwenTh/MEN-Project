const Customer = require("../models/customer");

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve customers" });
  }
};

exports.addCustomer = (req, res) => {
  const newCustomer = new Customer({
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
  const updateCustomer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      name: {
        firstName: req.body.name.firstName,
        lastName: req.body.name.lastName,
      },
      email: req.body.email,
      phone: req.body.phone,
    },
    { new: true } // This option makes sure that the updated document is returned to the client instead of the original document (the default).
  );
  res.json(updateCustomer);
};

exports.deleteCustomer = async (req, res) => {
  const deleteCustomer = await Customer.findByIdAndDelete(req.params.id);
  res.json(deleteCustomer);
};

exports.getCustomerById = async (req, res) => {
  const getCustomer = await Customer.findById(req.params.id);
  res.json(getCustomer);
};
