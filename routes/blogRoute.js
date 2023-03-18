const {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getAllBlogs,
  getBlogBySlug,
} = require("../controllers/blogController");
const { verifyTokenAndAdmin } = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", verifyTokenAndAdmin, createBlog);
router.put("/update", verifyTokenAndAdmin, updateBlog);
router.delete("/delete", verifyTokenAndAdmin, deleteBlog);
router.get("/find", getBlogById);
router.get("/find-by-slug", getBlogBySlug);
router.get("/get", getAllBlogs);

module.exports = router;
