const Article = require("../models/articleSchema");

//CREATE
const createArticle = async (req, res) => {
  const newArticle = new Article(req.body);
  try {
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateArticle = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Article _id" });
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedArticle);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteArticle = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Article _id" });
  try {
    await Article.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "Article has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Article All
const getAllArticles = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  // console.log(qlimit);
  try {
    let fArticle;

    fArticle = await Article.find()
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fArticle);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get Article
const getArticleById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Article _id" });
  try {
    let fArticle = await Article.findById(req.query._id);
    res.status(200).json(fArticle);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getAllArticles,
  getArticleById,
};
