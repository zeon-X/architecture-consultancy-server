const ServiceCategory = require("../models/serviceCategorySchema");

//CREATE
const createServiceCategory = async (req, res) => {
  const newServiceCategory = new ServiceCategory(req.body);
  try {
    const savedServiceCategory = await newServiceCategory.save();
    res.status(201).json(savedServiceCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateServiceCategory = async (req, res) => {
  if (!req.query._id)
    res.status(500).json({ msg: "provide an ServiceCategory _id" });
  try {
    const updatedServiceCategory = await ServiceCategory.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedServiceCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteServiceCategory = async (req, res) => {
  if (!req.query._id)
    res.status(500).json({ msg: "provide an ServiceCategory _id" });
  try {
    await ServiceCategory.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "ServiceCategory has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//ServiceCategory All
const getAllServiceCategorys = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  // console.log(qlimit);
  try {
    let fServiceCategory;

    fServiceCategory = await ServiceCategory.find().limit(qlimit).skip(qpage);

    res.status(200).json(fServiceCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};
//ServiceCategory All Parent
const getAllParentServiceCategorys = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  // console.log(qlimit);
  try {
    let fServiceCategory;

    fServiceCategory = await ServiceCategory.find({
      categoryType: "parent",
    });

    res.status(200).json(fServiceCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get ServiceCategory
const getServiceCategoryById = async (req, res) => {
  if (!req.query._id)
    res.status(500).json({ msg: "provide an ServiceCategory _id" });
  try {
    let fServiceCategory = await ServiceCategory.findById(req.query._id);
    res.status(200).json(fServiceCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createServiceCategory,
  updateServiceCategory,
  deleteServiceCategory,
  getAllServiceCategorys,
  getAllParentServiceCategorys,
  getServiceCategoryById,
};
