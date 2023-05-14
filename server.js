const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const customerRouter = require("./routes/customer");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/projectNermine", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/customer", customerRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
