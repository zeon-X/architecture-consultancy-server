const {
  createClientPageComponent,
  updateClientPageComponent,
  deleteClientPageComponent,
  getClientPageComponentById,
  getAllClientPageComponents,
} = require("../controllers/clientPageComponentController");
const { verifyTokenAndAdmin } = require("../middlewires/verifyToken");
const router = require("express").Router();
// some changes
router.post("/create", verifyTokenAndAdmin, createClientPageComponent);
router.put("/update", verifyTokenAndAdmin, updateClientPageComponent);
router.delete("/delete", verifyTokenAndAdmin, deleteClientPageComponent);
router.get("/find", getClientPageComponentById);
router.get("/get", getAllClientPageComponents);

module.exports = router;
