const Category = require("../models/categorySchema");

//CREATE
const createCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateCategory = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Category _id" });
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteCategory = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Category _id" });
  try {
    await Category.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "Category has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Category All
const getAllCategorys = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  // console.log(qlimit);
  try {
    let fCategory;

    fCategory = await Category.find()
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get Category
const getCategoryById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Category _id" });
  try {
    let fCategory = await Category.findById(req.query._id);
    res.status(200).json(fCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategorys,
  getCategoryById,
};
