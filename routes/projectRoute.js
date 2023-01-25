const {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  getAllActiveProjects,
  updateProjectStatus,
  getAllActiveProjectsByNameAndImage,
} = require("../controllers/projectController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", createProject);
router.put("/update", verifyTokenAndAdmin, updateProject);
router.put("/update-status", verifyTokenAndAdmin, updateProjectStatus);
router.delete("/delete", deleteProject);
router.get("/find", getProjectById);
router.get("/get", getAllProjects);
router.get("/get-active", getAllActiveProjects);
router.get("/get-active-by-basic", getAllActiveProjectsByNameAndImage);

module.exports = router;
