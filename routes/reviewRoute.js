const {
  createReview,
  updateReview,
  deleteReview,

  getAllReviews,
  getReviewById,
  getReviewByUserId,
  updateReviewStatus,
  getAllActiveReviews,
} = require("../controllers/reviewController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", createReview);
router.put("/update", verifyTokenAndAdmin, updateReview);
router.put("/update-status", updateReviewStatus);
router.delete("/delete", deleteReview);
router.get("/get-by-userId", verifyTokenAndAuthorization, getReviewByUserId);
router.get("/find", verifyTokenAndAdmin, getReviewById);
router.get("/get", getAllReviews);
router.get("/get-active", getAllActiveReviews);

module.exports = router;
