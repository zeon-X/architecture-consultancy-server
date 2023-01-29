const Comment = require("../models/commentSchema");

//CREATE
const createComment = async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateComment = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Comment _id" });
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteComment = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Comment _id" });
  try {
    await Comment.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "Comment has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Comment All
const getAllComments = async (req, res) => {
  try {
    let fComment;

    fComment = await Comment.find().sort({ createdAt: -1 });

    res.status(200).json(fComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get Comment
const getCommentById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Comment _id" });
  try {
    let fComment = await Comment.findById(req.query._id);
    res.status(200).json(fComment);
  } catch (err) {
    res.status(500).json(err);
  }
};
//get Comment
const getCommentByBlogId = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an blog _id" });
  try {
    let fComment = await Comment.find({ blogId: req.query._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(fComment);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getAllComments,
  getCommentById,
  getCommentByBlogId,
};
