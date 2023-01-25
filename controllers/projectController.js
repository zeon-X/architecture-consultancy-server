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

//Project All
const getAllProjects = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 30;
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

const getAllActiveProjects = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 30;
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
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 30;
  // console.log(qlimit);
  try {
    let fproject;

    fproject = await Project.find({ status: "active" })
      .select({ _id: 1, title: 1, img: 1 })
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fproject);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get project
const getProjectById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an project _id" });
  try {
    let fproject = await Project.findById(req.query._id);
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
  getAllActiveProjects,
  getAllActiveProjectsByNameAndImage,
  getProjectById,
};
