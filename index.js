const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const projectRoute = require("./routes/projectRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const orderRoute = require("./routes/orderRoute");
const categoryRoute = require("./routes/CategoryRoute");
const reviewRoute = require("./routes/reviewRoute");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.t14dqlh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("database connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/project", projectRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
app.use("/api/category", categoryRoute);
app.use("/api/review", reviewRoute);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to imrans creation" });
});

app.listen(PORT, () => {
  console.log("Server is running on port.." + PORT);
});
