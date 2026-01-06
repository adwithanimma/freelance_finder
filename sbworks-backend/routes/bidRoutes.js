const express = require("express");
const router = express.Router();

const {
  createBid,
  getBidsForJob,
  getMyBids,
  updateBidStatus,
} = require("../controllers/bidController");

const { protect } = require("../middleware/authMiddleware");

router.get("/my", protect, getMyBids);

router.get("/job/:jobId", protect, getBidsForJob);

router.post("/job/:jobId", protect, createBid);

router.put("/:bidId/status", protect, updateBidStatus);

module.exports = router;