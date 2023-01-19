const {
  createReview,
  updateReview,
  deleteReview,

  getAllReviews,
  getReviewById,
  getReviewByUserId,
  getReviewByEmail,
} = require("../controllers/reviewController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", verifyToken, createReview);
router.put("/update", verifyTokenAndAdmin, updateReview);
router.delete("/delete", verifyTokenAndAdmin, deleteReview);
router.get("/get-by-userId", verifyTokenAndAuthorization, getReviewByUserId);
router.get("/find", verifyTokenAndAdmin, getReviewById);

router.get("/find-by-email", verifyTokenAndAdmin, getReviewByEmail);
router.get("/get", getAllReviews);

module.exports = router;
