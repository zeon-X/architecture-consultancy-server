const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
  getAllCategorys,
} = require("../controllers/categoryController");
const { verifyTokenAndAdmin } = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", verifyTokenAndAdmin, createCategory);
router.put("/update", verifyTokenAndAdmin, updateCategory);
router.delete("/delete", verifyTokenAndAdmin, deleteCategory);
router.get("/find", getCategoryById);
router.get("/get", getAllCategorys);

module.exports = router;
