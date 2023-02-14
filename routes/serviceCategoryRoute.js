const {
  createServiceCategory,
  updateServiceCategory,
  deleteServiceCategory,
  getServiceCategoryById,
  getAllServiceCategorys,
  getAllParentServiceCategorys,
} = require("../controllers/serviceCategoryController");
const { verifyTokenAndAdmin } = require("../middlewires/verifyToken");
const router = require("express").Router();
// some changes
router.post("/create", verifyTokenAndAdmin, createServiceCategory);
router.put("/update", verifyTokenAndAdmin, updateServiceCategory);
router.delete("/delete", verifyTokenAndAdmin, deleteServiceCategory);
router.get("/find", getServiceCategoryById);
router.get("/get", getAllServiceCategorys);
router.get("/get-parent", getAllParentServiceCategorys);

module.exports = router;
