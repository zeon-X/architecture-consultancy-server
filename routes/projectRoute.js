const {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  getAllActiveProjects,
  updateProjectStatus,
  getAllActiveProjectsByNameAndImage,
  getProjectByCategory,
  getProjectByCategoryBasic,
} = require("../controllers/projectController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", verifyTokenAndAdmin, createProject);
router.put("/update", verifyTokenAndAdmin, updateProject);
router.put("/update-status", verifyTokenAndAdmin, updateProjectStatus);
router.delete("/delete", verifyTokenAndAdmin, deleteProject);
router.get("/find", getProjectById);
router.get("/find-by-cat", getProjectByCategory);
router.get("/find-by-cat-basic", getProjectByCategoryBasic);
router.get("/get", verifyTokenAndAdmin, getAllProjects);
router.get("/get-active", getAllActiveProjects);
router.get("/get-active-by-basic", getAllActiveProjectsByNameAndImage);

module.exports = router;
