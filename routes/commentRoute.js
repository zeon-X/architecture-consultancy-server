const {
  createComment,
  updateComment,
  deleteComment,
  getCommentById,
  getAllComments,
  getCommentByBlogId,
} = require("../controllers/commentController");
const { verifyTokenAndAdmin } = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", createComment);
router.put("/update", verifyTokenAndAdmin, updateComment);
router.delete("/delete", verifyTokenAndAdmin, deleteComment);
router.get("/find", getCommentById);
router.get("/get", verifyTokenAndAdmin, getAllComments);
router.get("/get-by-blog", getCommentByBlogId);

module.exports = router;
