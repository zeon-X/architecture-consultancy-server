const {
  createUser,
  updateUser,
  deleteUser,

  getAllUsers,
  getUserById,
  updateToAdmin,
  getUserByEmail,
} = require("../controllers/userController");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../middlewires/verifyToken");
const router = require("express").Router();

// user & admin
router.put("/update", verifyTokenAndAuthorization, updateUser);
router.get("/find", verifyTokenAndAuthorization, getUserById);
router.get("/find-by-email", verifyTokenAndAuthorization, getUserByEmail);

// admin
router.put("/make-admin", verifyTokenAndAdmin, updateToAdmin);
router.post("/create", verifyTokenAndAdmin, createUser);
router.delete("/delete", verifyTokenAndAdmin, deleteUser);
router.get("/get", verifyTokenAndAdmin, getAllUsers);

module.exports = router;
