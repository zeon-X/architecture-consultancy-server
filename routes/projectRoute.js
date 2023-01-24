const {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  getAllActiveProjects,
  updateProjectStatus,
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
router.delete("/delete", verifyTokenAndAdmin, deleteProject);
router.get("/find", getProjectById);
router.get("/get", getAllProjects);
router.get("/get-active", getAllActiveProjects);

module.exports = router;
