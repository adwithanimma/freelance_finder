const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  applyJob,
  getMyApplications,
  getMyPostedJobs,
  updateApplicationStatus,
} = require("../controllers/jobController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getJobs);
router.post("/", protect, createJob);
router.post("/:id/apply", protect, applyJob);
router.get("/my/applications", protect, getMyApplications);
router.get("/my/posted", protect, getMyPostedJobs);
router.put(
  "/:jobId/applications/:freelancerId",
  protect,
  updateApplicationStatus
);

module.exports = router;