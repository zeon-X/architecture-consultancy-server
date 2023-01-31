const Review = require("../models/reviewSchema");

//CREATE
const createReview = async (req, res) => {
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
const updateReview = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Review _id" });
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.query._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateReviewStatus = async (req, res) => {
  if (!req.query._id && !req.query.status)
    res.status(500).json({ msg: "provide an review _id or provide status" });
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req?.query?._id,
      {
        status: req?.query?.status,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteReview = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Review _id" });
  try {
    await Review.findByIdAndDelete(req.query._id);
    res.status(200).json({ msg: "Review has been deleted.." });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Review All
const getAllReviews = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 50;
  try {
    let review;

    review = await Review.find()
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllActiveReviews = async (req, res) => {
  const qpage = req.query.page || 0;
  const qlimit = req.query.limit || 50;
  // console.log(qlimit);
  try {
    let freview;

    freview = await Review.find({ status: "accepted" })
      .sort({ createdAt: -1 })
      .skip(qpage * qlimit)
      .limit(qlimit);

    res.status(200).json(freview);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get Review by id
const getReviewById = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an Review _id" });
  try {
    let review = await Review.findById(req.query._id);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get Review by user id
const getReviewByUserId = async (req, res) => {
  if (!req.query._id) res.status(500).json({ msg: "provide an user _id" });
  try {
    let review = await Review.find({ userId: req.query._id });
    // console.log(review);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createReview,
  updateReview,
  updateReviewStatus,
  deleteReview,
  getAllReviews,
  getReviewById,
  getAllActiveReviews,
  getReviewByUserId,
};
