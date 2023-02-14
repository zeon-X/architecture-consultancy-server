const Project = require("../models/projectSchema");

//CREATE
const createProject = async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateProject = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an project _id" });
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateProjectStatus = async (req, res) => {
  if (!req.query._id && !req.query.status)
    res.status(500).json({ msg: "provide an project _id or provide status" });
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.query._id,
      {
        status: req.query.status,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteProject = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an project _id" });
  try {
    await Project.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "Project has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get Project All
const getAllProjects = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  // console.log(qlimit);
  try {
    let fproject;

    fproject = await Project.find()
      .populate("category")
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fproject);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getHeroProjects = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 5;
  // console.log(qlimit);
  try {
    let fproject;

    fproject = await Project.find({ status: "active" })
      .populate("category")
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fproject);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllActiveProjects = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  // console.log(qlimit);
  try {
    let fproject;

    fproject = await Project.find({ status: "active" })
      .populate("category")
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fproject);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllActiveProjectsByNameAndImage = async (req, res) => {
  const qpage = parseInt(req.query.page) || 0;
  const qlimit = parseInt(req.query.limit) || 500;
  try {
    let fproject;

    fproject = await Project.find({ status: "active" })
      .select({
        _id: 1,
        title: 1,
        img: 1,
        location: 1,
        aboutLeft: 1,
        category: 1,
      })
      .populate("category")
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fproject);
  } catch (err) {
    res.status(500).json(err);
  }
};

//find project
const getProjectById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an project _id" });
  try {
    let fproject = await Project.findById(req.query._id).populate("category");

    if (fproject?.reviewId !== "") {
      fproject = await Project.findById(req.query._id).populate([
        { path: "reviewId", model: "Review" },
        { path: "category", model: "Category" },
      ]);
    }
    // console.log(fproject);

    res.status(200).json(fproject);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getProjectByCategory = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  console.log(req.query);
  if (!req.query._catId)
    res.status(500).json({ msg: "provide an category _id" });
  try {
    let fproject = await Project.find({
      category: req?.query?._catId,
      status: "active",
    })
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);
    res.status(200).json(fproject);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getProjectByCategoryBasic = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  // console.log(req.query);
  if (!req.query._catId)
    res.status(500).json({ msg: "provide an category _id" });

  try {
    let fproject = await Project.find({
      category: req?.query?._catId,
      status: "active",
    })
      .select({
        _id: 1,
        title: 1,
        img: 1,
        location: 1,
        aboutLeft: 1,
        category: 1,
      })
      .populate("category")
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fproject);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createProject,
  updateProject,
  updateProjectStatus,
  deleteProject,
  getAllProjects,
  getHeroProjects,
  getAllActiveProjects,
  getAllActiveProjectsByNameAndImage,
  getProjectById,
  getProjectByCategory,
  getProjectByCategoryBasic,
};
