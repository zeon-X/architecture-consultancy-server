const Blog = require("../models/blogSchema");

//CREATE
const createBlog = async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateBlog = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Blog _id" });
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteBlog = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Blog _id" });
  try {
    await Blog.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "Blog has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Blog All
const getAllBlogs = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 30;
  // console.log(qlimit);
  try {
    let fBlog;

    fBlog = await Blog.find()
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fBlog);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get Blog
const getBlogById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Blog _id" });
  try {
    let fBlog = await Blog.findById(req.query._id);
    res.status(200).json(fBlog);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
};
