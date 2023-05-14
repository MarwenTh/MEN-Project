const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: "First name required",
    },
    lastName: {
      type: String,
      required: "Last name required",
    },
  },
  email: {
    type: String,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Invalid email"],
  },
  phone: String,
});
module.exports = mongoose.model("Customer", CustomerSchema);
