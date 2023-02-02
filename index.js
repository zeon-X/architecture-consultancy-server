const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/public", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;

// ROUTERS
const projectRoute = require("./routes/projectRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const orderRoute = require("./routes/orderRoute");
const categoryRoute = require("./routes/categoryRoute");
const reviewRoute = require("./routes/reviewRoute");
const blogRoute = require("./routes/blogRoute");
const commentRoute = require("./routes/commentRoute");
//file or img save
const fileHandleRoute = require("./fileHandlers/fileHandle");

// DB CONNECT
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.wtm5era.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("database connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// APIS
app.use("/api/project", projectRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
app.use("/api/category", categoryRoute);
app.use("/api/review", reviewRoute);
app.use("/api/blog", blogRoute);
app.use("/api/comment", commentRoute);
// image or file save

app.use("/api/file", fileHandleRoute);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to imrans creation" });
});

app.listen(PORT, () => {
  console.log("Server is running on port.." + PORT);
});
