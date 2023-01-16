const {
  createProject,
  updateProject,
  deleteProject,

  getAllProjects,
  getProjectById,
} = require("../controllers/projectController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewires/verifyToken");
const router = require("express").Router();

router.post("/create", verifyTokenAndAdmin, createProject);
router.put("/update", verifyTokenAndAuthorization, updateProject);
router.delete("/delete", verifyTokenAndAuthorization, deleteProject);
router.get("/find", getProjectById);
router.get("/get", getAllProjects);

module.exports = router;
