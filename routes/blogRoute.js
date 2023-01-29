const {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getAllBlogs,
} = require("../controllers/blogController");
const { verifyTokenAndAdmin } = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", verifyTokenAndAdmin, createBlog);
router.put("/update", verifyTokenAndAdmin, updateBlog);
router.delete("/delete", verifyTokenAndAdmin, deleteBlog);
router.get("/find", getBlogById);
router.get("/get", getAllBlogs);

module.exports = router;
