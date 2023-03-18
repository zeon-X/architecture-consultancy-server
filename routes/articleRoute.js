const {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticleById,
  getAllArticles,
  getArticleBySlug,
} = require("../controllers/articleController");
const { verifyTokenAndAdmin } = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", verifyTokenAndAdmin, createArticle);
router.put("/update", verifyTokenAndAdmin, updateArticle);
router.delete("/delete", verifyTokenAndAdmin, deleteArticle);
router.get("/find", getArticleById);
router.get("/find-by-slug", getArticleBySlug);
router.get("/get", getAllArticles);

module.exports = router;
