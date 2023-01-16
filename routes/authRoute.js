const {
  registerUser,
  loginUser,
  loginOrRegister,
} = require("../controllers/authController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewires/verifyToken");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reglog", loginOrRegister);

module.exports = router;
