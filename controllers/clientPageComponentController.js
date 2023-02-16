const ClientPageComponent = require("../models/clientPageComponentSchema");

//CREATE
const createClientPageComponent = async (req, res) => {
  const newClientPageComponent = new ClientPageComponent(req.body);
  try {
    const savedClientPageComponent = await newClientPageComponent.save();
    res.status(201).json(savedClientPageComponent);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateClientPageComponent = async (req, res) => {
  if (!req.query._id)
    res.status(500).json({ msg: "provide an ClientPageComponent _id" });
  try {
    const updatedClientPageComponent =
      await ClientPageComponent.findByIdAndUpdate(
        req.query._id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
    res.status(200).json(updatedClientPageComponent);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteClientPageComponent = async (req, res) => {
  if (!req.query._id)
    res.status(500).json({ msg: "provide an ClientPageComponent _id" });
  try {
    await ClientPageComponent.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "ClientPageComponent has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//ClientPageComponent All
const getAllClientPageComponents = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 500;
  // console.log(qlimit);
  try {
    let fClientPageComponent;

    fClientPageComponent = await ClientPageComponent.find()
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(fClientPageComponent);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get ClientPageComponent
const getClientPageComponentById = async (req, res) => {
  if (!req.query._id)
    res.status(500).json({ msg: "provide an ClientPageComponent _id" });
  try {
    let fClientPageComponent = await ClientPageComponent.findById(
      req.query._id
    );
    res.status(200).json(fClientPageComponent);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createClientPageComponent,
  updateClientPageComponent,
  deleteClientPageComponent,
  getAllClientPageComponents,
  getClientPageComponentById,
};
