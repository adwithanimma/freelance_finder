const express = require("express");
const router = express.Router();

const {
  createPayment,
  releasePayment,
  getMyPayments,
} = require("../controllers/paymentController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createPayment);
router.put("/:paymentId/release", protect, releasePayment);
router.get("/my", protect, getMyPayments);

module.exports = router;