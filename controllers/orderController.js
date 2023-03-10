const Order = require("../models/orderSchema");

//CREATE
const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateOrder = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide a _id" });
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateOrderStatus = async (req, res) => {
  if (!req.query._id && !req.query.status)
    res.status(500).json({ msg: "provide an order _id or provide status" });
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.query._id,
      {
        status: req.query.status,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteOrder = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide a _id" });
  try {
    await Order.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "Order has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET BY ID // it will take user id
const getOrderByUserId = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide a user _id" });

  try {
    const forders = await Order.find({ userId: req.query._id });
    // console.log(forders);
    res.status(200).json(forders);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//GET BY ID // it will take order id
const getOrderById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an order _id" });

  try {
    let forders = await Order.findById(req.query._id);
    if (forders.reviewId !== "") {
      forders = await Order.findById(req.query._id).populate("reviewId");
    }
    // console.log(forders);
    res.status(200).json(forders);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//Order All
const getAllOrders = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 5000;
  try {
    let forders;

    forders = await Order.find()
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(forders);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createOrder,
  updateOrder,
  updateOrderStatus,
  deleteOrder,
  getOrderByUserId,
  getOrderById,
  getAllOrders,
};
