const User = require("../models/userSchema");

//CREATE
const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update
const updateUser = async (req, res) => {
  if (!req.query._id) res.status(400).json({ msg: "_id not provided" });
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ err, msg: "opps..! Error" });
  }
};

// update admin
const updateToAdmin = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an User _id" });
  try {
    const updatedWishList = await User.findByIdAndUpdate(
      req.query._id,
      {
        $set: {
          role: "admin",
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedWishList);
  } catch (err) {
    res.status(500).json({ err, msg: "user not found" });
  }
};

//DELETE
const deleteUser = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an User _id" });
  try {
    await User.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "User has been deleted.." });
  } catch (err) {
    res.status(500).json({ err, msg: "user not found" });
  }
};

//User All
const getAllUsers = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 50;
  try {
    let users;

    users = await User.find()
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);
    // console.log(users);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get User
const getUserById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an User _id" });
  try {
    let userdata;
    userdata = await User.findById(req.query._id);
    // console.log(userdata);
    res.status(200).json(userdata);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//get User
const getUserByEmail = async (req, res) => {
  if (!req.query.email) res.status(500).json({ msg: "provide an email" });
  try {
    let userdata;
    userdata = await User.find({ email: req?.query?.email });
    // console.log(userdata);
    res.status(200).json(userdata);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,

  getAllUsers,
  getUserById,

  updateToAdmin,
  getUserByEmail,
};
