const {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderByUserId,
  getAllOrders,
  updateOrderStatus,
  getOrderById,
} = require("../controllers/orderController");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewires/verifyToken");

const router = require("express").Router();

router.post("/create", createOrder);

router.put("/update", verifyTokenAndAuthorization, updateOrder);
router.put("/update-status", verifyTokenAndAdmin, updateOrderStatus);

router.delete("/delete", verifyTokenAndAdmin, deleteOrder);

router.get("/find", verifyTokenAndAuthorization, getOrderById);
router.get("/find-by-user", verifyTokenAndAuthorization, getOrderByUserId);
router.get("/get", verifyTokenAndAdmin, getAllOrders);

module.exports = router;
